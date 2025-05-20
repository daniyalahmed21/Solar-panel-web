import { motion } from 'framer-motion';
import { ArrowRight, Sun, Shield, DollarSign, Zap, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-green-100 rounded-full filter blur-[100px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100 to-green-100 rounded-full filter blur-[100px] opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-[80px] opacity-20 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                <Sun className="w-6 h-6 text-yellow-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 mb-6 leading-tight max-w-xl">
                Power Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Home</span> with Clean Solar Energy
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Transform your energy consumption with our premium solar solutions. Save money, increase your home's value, and contribute to a sustainable future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group shadow-lg hover:shadow-xl"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50/50 px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculate Savings
              </motion.button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              {[
                { icon: <DollarSign className="w-6 h-6 text-green-600" />, value: "70%", label: "Energy Savings", bg: "bg-green-100" },
                { icon: <Shield className="w-6 h-6 text-blue-600" />, value: "25yr", label: "Warranty", bg: "bg-blue-100" },
                { icon: <Sun className="w-6 h-6 text-yellow-600" />, value: "6.5k+", label: "Installations", bg: "bg-yellow-100" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`${item.bg} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                    {item.icon}
                  </div>
                  <div className="font-bold text-2xl md:text-3xl text-gray-800 mb-1">{item.value}</div>
                  <div className="text-sm md:text-base text-gray-500">{item.label}</div>
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
                alt="Modern home with solar panels" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover lg:max-w-xl xl:max-w-2xl"
              />
              
              {/* Stats Cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Average Savings</p>
                    <p className="text-xl md:text-2xl font-bold text-green-600">$1,200/yr</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Protection</p>
                    <p className="text-xl md:text-2xl font-bold text-blue-600">25 Years</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-10 right-10 bg-white rounded-xl p-4 shadow-xl border border-gray-100 hidden md:block"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Payback Period</p>
                    <p className="text-xl md:text-2xl font-bold text-purple-600">5-7 Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;