import logo from '../assets/logo.svg';

const Footer = () => {
  const companyName = "SUNFINITY";
  const fullCompanyName = "SUNFINITY SOLAR ENERGY";
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Solutions', href: '/#products' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10"> 
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4 ">
            <div className='bg-white rounded-full  object-cover'>
            <img src={logo} className='h-14 w-14' alt="" />

            </div>
            <span className="ml-3 text-4xl font-bold text-white">{companyName}</span> 
          </div>
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed"> 
            Your trusted partner for complete solar installation services in Pakistan. A brighter tomorrow, starts today!
          </p>
        </div>

        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3"> 
            {footerLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-slate-200 hover:text-orange-400 transition-colors duration-200 ease-in-out text-base font-medium group"
                >
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-orange-400 mt-0.5"></span> {/* Animated underline effect */}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {currentYear} {fullCompanyName}. All rights reserved. Karachi, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;