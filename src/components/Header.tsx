import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const companyName = "SUNFINITY";
  const primaryPhoneNumber = "+923333746752";
  const primaryPhoneNumberDisplay = "+92 333-3746752";

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Handle scroll to section if coming from another page
    if (location.state?.scrollTo) {
      const section = document.querySelector(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to allow page to render
      }
    }
  }, [location.pathname, location.state]);

  const navItems = [
    { name: 'Home', href: '/', isHash: false, homePageOnly: false },
    { name: 'Benefits', href: '#benefits', isHash: true, homePageOnly: true },
    { name: 'Products', href: '#products', isHash: true, homePageOnly: true },
    { name: 'Our Process', href: '#process', isHash: true, homePageOnly: true },
    { name: 'Testimonials', href: '#testimonials', isHash: true, homePageOnly: true },
    { name: 'FAQ', href: '/faq', isHash: false, homePageOnly: false },
    { name: 'Contact Us', href: '/contact', isHash: false, homePageOnly: false },
  ];

  const filteredNavItems = navItems.filter(item => 
    !item.homePageOnly || location.pathname === '/'
  );

  const handleNavigation = (href, isHash) => {
    if (isHash) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href } });
      } else {
        // For hash links, scroll to the section
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For regular links, navigate to the page
      navigate(href);
    }
    closeMobileMenu();
  };

  const closeMobileMenu = () => setIsMenuOpen(false);
  const handleGetQuoteClick = () => {
    navigate('/contact');
    closeMobileMenu();
  };

  const MotionLink = motion(Link);
  const MotionButton = motion.button;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2.5' : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              className="h-14 w-14"
              alt={`${companyName} Logo`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.span
              className="ml-2 text-2xl font-bold text-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {companyName}
            </motion.span>
          </Link>

          <div className="hidden lg:flex items-center space-x-7">
            {filteredNavItems.map((item) => (
              <MotionButton
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isHash)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-gray-800 hover:text-orange-600'
                }`}
                whileHover={{ y: -2.5 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </MotionButton>
            ))}
            <div className="flex items-center space-x-5 ml-5">
              <motion.a
                href={`tel:${primaryPhoneNumber}`}
                className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-1.5" />
                <span className="hidden xl:inline">{primaryPhoneNumberDisplay}</span>
                <span className="xl:hidden">Call</span>
              </motion.a>
              <motion.button
                onClick={handleGetQuoteClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-7 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-300/50 text-sm"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>

          <motion.button
            className="lg:hidden text-orange-600 p-2 rounded-md hover:bg-orange-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "circOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100 mt-2.5"
            >
              <div className="py-3 flex flex-col space-y-1.5">
                {filteredNavItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href, item.isHash)}
                    className="block text-left font-medium text-gray-700 hover:text-orange-600 py-3 px-3 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-5 space-y-3.5 px-3">
                  <a
                    href={`tel:${primaryPhoneNumber}`}
                    className="flex items-center justify-center text-orange-600 font-semibold hover:text-orange-700 bg-orange-50 hover:bg-orange-100 py-3.5 px-6 rounded-full transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call {primaryPhoneNumberDisplay}
                  </a>
                  <motion.button
                    onClick={handleGetQuoteClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-300/50"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;