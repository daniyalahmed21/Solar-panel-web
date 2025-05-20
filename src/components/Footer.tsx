import React from 'react';
import { Sun } from 'lucide-react';

const Footer = () => {
  const companyName = "SUNFINITY";
  const fullCompanyName = "SUNFINITY SOLAR ENERGY";
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Solutions', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10"> {/* Darker, modern background */}
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        {/* Brand Info - Centered */}
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4">
            <Sun className="h-10 w-10 text-orange-500" /> {/* Slightly larger icon */}
            <span className="ml-3 text-4xl font-bold text-white">{companyName}</span> {/* Bolder, larger, white */}
          </div>
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed"> {/* Lighter text for tagline */}
            Your trusted partner for complete solar installation services in Pakistan. A brighter tomorrow, starts today!
          </p>
        </div>

        {/* Simplified Navigation Links - Centered */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3"> {/* Increased gap */}
            {footerLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-slate-200 hover:text-orange-400 transition-colors duration-200 ease-in-out text-base font-medium group"
                  // Modern hover: color change, no underline by default, can add a subtle effect
                >
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-orange-400 mt-0.5"></span> {/* Animated underline effect */}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {currentYear} {fullCompanyName}. All rights reserved. Karachi, Pakistan.
            </p>
            <div className="flex space-x-5">
              <a 
                href="#" 
                className="text-slate-400 hover:text-orange-400 transition-colors duration-200 ease-in-out text-sm group"
              >
                Privacy Policy
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-orange-400 mt-0.5"></span>
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-orange-400 transition-colors duration-200 ease-in-out text-sm group"
              >
                Terms of Service
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-orange-400 mt-0.5"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;