import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const companyName = "SUNFINITY";
  const primaryPhoneNumber = "+923333746752";
  const primaryPhoneNumberDisplay = "+92 333-3746752";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Solutions',
      href: '#solutions', // This also acts as a link to the Solutions section
      subItems: [
        { name: 'Residential', href: '#residential' },
        { name: 'Commercial', href: '#commercial' },
        { name: 'Industrial', href: '#industrial' }
      ]
    },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Products', href: '#products' },
    { name: 'Our Process', href: '#process' }, // Changed "Process" to "Our Process" for clarity
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }

  // Helper for creating unique IDs for ARIA attributes
  const generateId = (name) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }} // Slightly adjusted spring
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2.5' : 'bg-white/80 backdrop-blur-md py-4' // Enhanced blur and shadow on scroll
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sun className="h-8 w-8 text-orange-500" /> {/* SUNFINITY Orange Sun */}
            <span className="ml-2 text-2xl font-bold text-orange-600"> {/* SUNFINITY Orange Text */}
              {companyName}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-7"> {/* Slightly increased spacing */}
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.a
                    href={item.href}
                    className={`flex items-center font-medium transition-colors duration-200 ${
                      isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-gray-800 hover:text-orange-600' // Orange hover for links
                    }`}
                    whileHover={{ y: -2.5 }} // Slightly more lift
                    whileTap={{ y: 0 }}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </motion.a>
                  
                  {item.subItems && (
                    <motion.div
                      className="absolute left-0 top-full mt-1 w-52 rounded-xl shadow-xl bg-white p-2 z-50
                                 opacity-0 invisible group-hover:visible group-hover:opacity-100
                                 transform translate-y-2 group-hover:translate-y-0 
                                 transition-all duration-250 ease-in-out 
                                 pointer-events-none group-hover:pointer-events-auto"
                      // Using top-full with a small mt-1 and translate-y for reveal to avoid gaps
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200" // Orange hover
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="flex items-center space-x-5 ml-5"> {/* Adjusted spacing */}
              <motion.a
                href={`tel:${primaryPhoneNumber}`}
                className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors" // Orange phone link
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-1.5" />
                <span className="hidden xl:inline">{primaryPhoneNumberDisplay}</span>
                <span className="xl:hidden">Call</span> {/* Shorter for mobile-like sizes if it were to show */}
              </motion.a>
              
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-7 py-2.5 rounded-full transition-all duration-300 font-semibold flex items-center shadow-lg hover:shadow-orange-300/50 text-sm" // Orange CTA Button
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-orange-600 p-2 rounded-md hover:bg-orange-50 transition-colors" // Orange menu icon
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "circOut" }} // Smoother ease
              className="lg:hidden overflow-hidden border-t border-gray-100 mt-2.5" // Added border and margin
            >
              <div className="py-3 flex flex-col space-y-1.5">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex justify-between items-center font-medium text-gray-700 hover:text-orange-600 py-3 px-3 rounded-lg transition-colors duration-200" // Orange hover
                          aria-expanded={activeDropdown === item.name}
                          aria-controls={`mobile-submenu-${generateId(item.name)}`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              id={`mobile-submenu-${generateId(item.name)}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "circOut" }}
                              className="pl-6 pb-1 pt-1 space-y-1.5 overflow-hidden bg-orange-50/30 rounded-md" // Added subtle bg and rounded
                            >
                              {item.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-2.5 px-3 text-gray-600 hover:text-orange-700 hover:bg-orange-100 rounded-md transition-colors text-sm font-medium" // Orange hover
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block font-medium text-gray-700 hover:text-orange-600 py-3 px-3 rounded-lg transition-colors duration-200" // Orange hover
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                
                <div className="pt-5 space-y-3.5 px-3">
                  <a
                    href={`tel:${primaryPhoneNumber}`}
                    className="flex items-center justify-center text-orange-600 font-semibold hover:text-orange-700 bg-orange-50 hover:bg-orange-100 py-3.5 px-6 rounded-full transition-colors" // Orange theme
                    onClick={closeMobileMenu}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call {primaryPhoneNumberDisplay}
                  </a>
                  <motion.button
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-300/50" // Orange CTA
                    onClick={closeMobileMenu}
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