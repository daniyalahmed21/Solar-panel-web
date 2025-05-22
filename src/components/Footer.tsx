import { Link } from 'react-router-dom'; // 1. Import Link
import logo from "../assets/logo.svg";    // Ensure this path is correct

const Footer = () => {
  const companyName = "SUNFINITY";
  const fullCompanyName = "SUNFINITY SOLAR ENERGY";
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Calculator", href: "/calculator" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-10">
          {/* 2. Use Link and pass state={null} for the logo/company name link */}
          <Link to="/" state={null} className="inline-flex flex-col items-center group mb-4">
            <div className="flex items-center justify-center">
              {/* <div className="bg-white rounded-full p-1 transform group-hover:scale-105 transition-transform duration-200 ease-in-out">
                <img
                  src={logo}
                  className="h-12 w-12"
                  alt={`${companyName} Logo`}
                />
              </div> */}
              <span className="ml-3 text-3xl sm:text-4xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200 ease-in-out">
                {companyName}
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            Your trusted partner for complete solar installation services in
            Pakistan. A brighter tomorrow, starts today!
          </p>
        </div>

        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-4">
            {footerLinks.map((link) => {
              return (
                <li key={link.name}>
                  {/* 3. Use Link for footer navigation items and pass state={null} */}
                  <Link
                    to={link.href}
                    state={null} // Ensures clean navigation state
                    className="text-slate-200 hover:text-orange-400 transition-colors duration-200 ease-in-out text-base font-medium group relative py-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 block w-full max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-orange-400"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {currentYear} {fullCompanyName}. All rights reserved. Karachi,
              Pakistan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;