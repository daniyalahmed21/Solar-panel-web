import { motion } from 'framer-motion';
import { ArrowRight, Sun, Shield, DollarSign, Zap, Wrench } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming Link might be used for the CTA

const Hero = () => {
  const companyName = "SUNFINITY SOLAR ENERGY";
  const tagline = "A brighter tomorrow, starts today!";
  const heroParagraph = `Your trusted partner for complete solar projects in Pakistan – from high-quality panels, inverters, and batteries to expert installation and dedicated warranty support. ${tagline}`;

  const keyStats = [
    { icon: <DollarSign className="w-6 h-6 text-green-600" />, value: "Avg 50%", label: "Bill Reduction", bg: "bg-green-100" },
    { icon: <Shield className="w-6 h-6 text-blue-600" />, value: "10-Year", label: "Panel Warranty", bg: "bg-blue-100" },
    { icon: <Wrench className="w-6 h-6 text-orange-600" />, value: "Expert", label: "Installation", bg: "bg-orange-100" }
  ];

  const overlayStats = [
    {
      id: 1,
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
      label: "Typical Savings",
      value: "~50%", 
      bgColor: "bg-green-100",
      // Adjusted positioning for mobile: default closer, sm and up uses negative offsets
      positionClasses: "-bottom-2 -left-2 sm:-bottom-6 sm:-left-6", 
      delay: 1
    },
    {
      id: 2,
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      label: "Panel Lifespan",
      value: "10+ Years",  // Corrected to typical panel operational life
      bgColor: "bg-blue-100",
      // Adjusted positioning for mobile
      positionClasses: "-top-2 -right-2 sm:-top-6 sm:-right-6", 
      delay: 1.2
    },
    {
      id: 3,
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
      label: "Payback Period",
      value: "3-6 Years", 
      bgColor: "bg-purple-100",
      positionClasses: "-bottom-10 right-4 sm:right-6 hidden md:block", // sm:right-6 for consistency
      delay: 1.4
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-20 md:pb-32 overflow-x-hidden "> {/* Restored background gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full filter blur-[100px] opacity-25 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100 to-red-100 rounded-full filter blur-[100px] opacity-25 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-r from-orange-100 to-red-50 rounded-full filter blur-[80px] opacity-20 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 z-10 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="relative inline-block" 
            >
              <div className="absolute -left-4 -top-4 lg:-left-6 lg:-top-6 bg-orange-100 rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow-sm">
                <Sun className="w-6 h-6 lg:w-7 lg:h-7 text-orange-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] xl:text-[3.8rem] font-bold text-gray-900 mb-6 leading-tight max-w-xl mx-auto lg:mx-0">
                Power Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600">Future</span> with {companyName.split(" ")[0]}
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              {heroParagraph}
            </motion.p>
            
            {/* Assuming the CTA button might navigate, using Link from react-router-dom */}
            <Link to="/contact"> 
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                <motion.button
                  // If Link handles navigation, button might not need its own onClick for navigation
                  // Or this could be a motion.div styled as a button if Link is the primary interactive element
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold flex items-center justify-center group shadow-lg hover:shadow-orange-300/40 text-lg w-full sm:w-auto"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </Link>

            {/* Key Stats - made responsive for mobile */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 max-w-xl mx-auto lg:mx-0" // Changed to 2 cols on mobile, 3 on sm+
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              {keyStats.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-3 sm:p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" // Adjusted padding slightly for mobile
                  whileHover={{ y: -5, scale:1.03 }}
                >
                  <div className={`${item.bg} rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-inner`}> {/* Icon size adjusted with sm: prefix */}
                    {item.icon}
                  </div>
                  <div className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800 mb-0.5 sm:mb-1">{item.value}</div> {/* Responsive text */}
                  <div className="text-xs text-gray-500">{item.label}</div> {/* Smaller label text for mobile */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 relative order-1 lg:order-2 mt-8 lg:mt-0" // Added margin top on mobile for image
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <img 
                src="https://eridirect.com/wp-content/uploads/2021/02/bigstock-Solar-panel-against-blue-sky-16564781.jpg" 
                alt={`Solar panel installation by ${companyName}`}
                width="1000" 
                height="667" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover lg:max-w-xl xl:max-w-2xl mx-auto"
              />
              
              {overlayStats.map(stat => (
                <motion.div 
                  key={stat.id}
                  // Adjusted max-width for mobile
                  className={`absolute bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/30 max-w-[160px] sm:max-w-[180px] md:max-w-[210px] ${stat.positionClasses}`} 
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: stat.delay, type: "spring", stiffness:200, damping: 15 }}
                  whileHover={{ y: -5, scale:1.03 }}
                >
                  <div className="flex items-center">
                    <div className={`${stat.bgColor} rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 shadow-sm`}> {/* Responsive icon padding */}
                      {/* Responsive icon size */}
                      {React.cloneElement(stat.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" + (stat.icon.props.className ? ` ${stat.icon.props.className}` : "") })}
                    </div>
                    <div>
                      <p className="text-gray-700 text-[0.65rem] sm:text-xs font-semibold">{stat.label}</p> {/* Responsive label text */}
                      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{stat.value}</p> {/* Responsive value text */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;