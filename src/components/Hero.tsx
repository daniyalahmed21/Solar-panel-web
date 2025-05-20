import { motion } from 'framer-motion';
import { ArrowRight, Sun, Shield, DollarSign, Zap, Wrench } from 'lucide-react';

const Hero = () => {
  // Data as provided in your last code snippet
  const companyName = "SUNFINITY SOLAR ENERGY";
  const tagline = "A brighter tomorrow, starts today!";
  const heroParagraph = `Your trusted partner for complete solar projects in Pakistan – from high-quality panels, inverters, and batteries to expert installation and dedicated warranty support. ${tagline}`;

  const keyStats = [
    { icon: <DollarSign className="w-6 h-6 text-green-600" />, value: "Upto 80%", label: "Bill Reduction", bg: "bg-green-100" },
    { icon: <Shield className="w-6 h-6 text-blue-600" />, value: "25yr", label: "Performance Warranty", bg: "bg-blue-100" },
    { icon: <Wrench className="w-6 h-6 text-orange-600" />, value: "Expert", label: "Installation", bg: "bg-orange-100" } // Kept orange accent here
  ];

  const overlayStats = [
    {
      id: 1,
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
      label: "Save Annually",
      value: "PKR 200k+",
      bgColor: "bg-green-100",
      positionClasses: "-bottom-6 -left-6",
      delay: 1
    },
    {
      id: 2,
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      label: "Panel Lifespan",
      value: "10+ Years", // This was "25+ Years" in some versions, using what's in current user code
      bgColor: "bg-blue-100",
      positionClasses: "-top-6 -right-6",
      delay: 1.2
    },
    {
      id: 3,
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
      label: "Payback Period",
      value: "3-6 Years",
      bgColor: "bg-purple-100",
      positionClasses: "-bottom-10 right-4 sm:right-10 hidden md:block",
      delay: 1.4
    }
  ];

  return (
    // Changed section background to a warmer gradient
    <section id="home" className="relative min-h-screen pt-32   overflow-hidden bg-gradient-to-br ">
      {/* Adjusted background decorations for warmer theme */}
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
                <Sun className="w-6 h-6 lg:w-7 lg:h-7 text-orange-500" /> {/* Orange Sun icon (already orange) */}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] xl:text-[3.8rem] font-bold text-gray-900 mb-6 leading-tight max-w-xl mx-auto lg:mx-0">
                {/* Changed H1 gradient span to orange/yellow theme */}
                Power Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600">Future</span> with {companyName.split(" ")[0]}
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0" // text-gray-700 for better contrast on lighter bg
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              {heroParagraph}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              {/* CTA button already orange gradient */}
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold flex items-center justify-center group shadow-lg hover:shadow-orange-300/40 text-lg" // Enhanced hover shadow
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Key stats: icon colors remain as defined in array for variety, bg colors also from array */}
            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              {keyStats.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  whileHover={{ y: -5, scale:1.03 }}
                >
                  <div className={`${item.bg} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-inner`}>
                    {item.icon}
                  </div>
                  <div className="font-bold text-xl sm:text-2xl text-gray-800 mb-1">{item.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <img 
                src="https://eridirect.com/wp-content/uploads/2021/02/bigstock-Solar-panel-against-blue-sky-16564781.jpg" 
                alt={`Solar panel installation by ${companyName}`}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover lg:max-w-xl xl:max-w-2xl mx-auto aspect-auto"
              />
              
              {/* Overlay stats: icon colors remain as defined for variety, bg colors also from array */}
              {overlayStats.map(stat => (
                <motion.div 
                  key={stat.id}
                  className={`absolute bg-white/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-white/30 max-w-[180px] sm:max-w-[210px] ${stat.positionClasses}`}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: stat.delay, type: "spring", stiffness:200, damping: 15 }}
                  whileHover={{ y: -5, scale:1.03 }}
                >
                  <div className="flex items-center">
                    <div className={`${stat.bgColor} rounded-full p-2 mr-2 sm:mr-3 flex-shrink-0 shadow-sm`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-gray-700 text-xs sm:text-sm font-semibold">{stat.label}</p>
                      <p className="text-md sm:text-lg font-bold text-gray-900">{stat.value}</p>
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