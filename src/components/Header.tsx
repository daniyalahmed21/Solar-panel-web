import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const companyName = "SUNFINITY";
  const primaryPhoneNumber = "+923333746752";
  const primaryPhoneNumberDisplay = "+92 333-3746752";

  // Throttled scroll handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10);
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scroll to sections and top
  useEffect(() => {
    const scrollToSection = (sectionId: string) => {
      const section = document.querySelector(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return true;
      }
      return false;
    };

    if (location.hash) {
      // Handle direct URL access with hash
      if (scrollToSection(location.hash)) {
        // Clean up the URL after scrolling
        setTimeout(() => {
          navigate(location.pathname, { replace: true });
        }, 1000);
      }
    } else if (location.state?.scrollTo) {
      // Handle navigation from other pages with state
      if (scrollToSection(location.state.scrollTo)) {
        // Clean up the state after scrolling
        setTimeout(() => {
          navigate(location.pathname, { replace: true, state: {} });
        }, 1000);
      } else {
        navigate(location.pathname, { replace: true, state: {} });
      }
    } else {
      // Default scroll to top for new pages
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.state, navigate]);

  const navItems = [
    { name: 'Home', href: '/', isHash: false, homePageOnly: false },
    { name: 'Benefits', href: '#benefits', isHash: true, homePageOnly: true },
    { name: 'Products', href: '#products', isHash: true, homePageOnly: true },
    { name: 'Our Process', href: '#process', isHash: true, homePageOnly: true },
    { name: 'Testimonials', href: '#testimonials', isHash: true, homePageOnly: true },
    { name: 'Calculator', href: '/calculator', isHash: false, homePageOnly: false },
    { name: 'FAQ', href: '/faq', isHash: false, homePageOnly: false },
    { name: 'Contact Us', href: '/contact', isHash: false, homePageOnly: false },
  ];

  const filteredNavItems = navItems.filter(item =>
    !item.homePageOnly || location.pathname === '/'
  );

  const handleNavigation = (href: string, isHash: boolean, itemName?: string) => {
    closeMobileMenu();

    if (itemName === 'Home' && location.pathname !== '/') {
      navigate('/', { state: { scrollTo: '#products' } });
      return;
    }

    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href } });
      } else {
        const section = document.querySelector(href);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update URL without reload
            window.history.replaceState({}, '', href);
          }, 50);
        }
      }
    } else {
      navigate(href);
    }
  };

  const closeMobileMenu = () => setIsMenuOpen(false);

  const handleGetQuoteClick = () => {
    navigate('/contact');
    closeMobileMenu();
  };

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
          <Link 
            to="/" 
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md"
            onClick={() => handleNavigation('/', false, 'Home')}
            aria-label="Home"
          >
            <motion.img
              src={logo}
              className="h-12 sm:h-14 w-12 sm:w-14"
              alt={`${companyName} Logo`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              loading="eager"
            />
            <motion.span
              className="ml-2 text-xl sm:text-2xl font-bold text-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {companyName}
            </motion.span>
          </Link>

          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {filteredNavItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isHash, item.name)}
                className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                  isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-gray-800 hover:text-orange-600'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md px-2 py-1`}
                whileHover={{ y: -2.5 }}
                whileTap={{ y: 0 }}
                aria-label={item.name}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="flex items-center space-x-3 xl:space-x-5 ml-3 xl:ml-5">
              <motion.a
                href={`tel:${primaryPhoneNumber}`}
                className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm xl:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Call us"
              >
                <Phone className="h-4 w-4 xl:h-5 xl:w-5 mr-1.5" />
                <span className="hidden md:inline">{primaryPhoneNumberDisplay}</span>
                <span className="md:hidden">Call</span>
              </motion.a>
              <motion.button
                onClick={handleGetQuoteClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-300/50 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Get free quote"
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>

          <motion.button
            className="lg:hidden text-orange-600 p-2 rounded-md hover:bg-orange-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
              className="lg:hidden overflow-hidden border-t border-gray-200 mt-2.5"
            >
              <div className="py-3 flex flex-col space-y-1">
                {filteredNavItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href, item.isHash, item.name)}
                    className="block text-left font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 py-3 px-3 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    aria-label={item.name}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 space-y-3 px-3 border-t border-gray-100 mt-2">
                  <a
                    href={`tel:${primaryPhoneNumber}`}
                    className="flex items-center justify-center text-orange-600 font-semibold hover:text-orange-700 bg-orange-50 hover:bg-orange-100 py-3 px-6 rounded-full transition-colors w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                    aria-label="Call us"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call {primaryPhoneNumberDisplay}
                  </a>
                  <motion.button
                    onClick={handleGetQuoteClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-orange-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Get free quote"
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