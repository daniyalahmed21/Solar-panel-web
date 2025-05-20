import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      href: '#solutions',
      subItems: [
        { name: 'Residential', href: '#residential' },
        { name: 'Commercial', href: '#commercial' },
        { name: 'Industrial', href: '#industrial' }
      ]
    },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sun className="h-8 w-8 text-amber-400" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              SolarBright
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.a
                    href={item.href}
                    className={`flex items-center font-medium transition-colors duration-200 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </motion.a>
                  
                  {item.subItems && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white p-2 z-50 hidden group-hover:block"
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <motion.a
                href="tel:+18001234567"
                className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="hidden xl:inline">(800) 123-4567</span>
                <span className="xl:hidden">Call Us</span>
              </motion.a>
              
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-full transition-all duration-200 font-medium flex items-center shadow-md hover:shadow-lg"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-0">
                    {item.subItems ? (
                      <div className="py-2">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex justify-between items-center font-medium text-gray-800 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                          {item.name}
                          <ChevronDown 
                            className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 py-2 space-y-2"
                          >
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block font-medium text-gray-800 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 space-y-4 px-4">
                  <a 
                    href="tel:+18001234567" 
                    className="flex items-center justify-center text-blue-600 font-medium hover:text-blue-700 bg-blue-50 py-3 px-6 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call (800) 123-4567
                  </a>
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-full transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Free Quote
                  </button>
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