import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Home, Sun, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Consultation',
    description: 'Our experts assess your energy needs and design a custom solar solution.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300'
  },
  {
    icon: Home,
    title: 'Installation',
    description: 'Professional installation by our certified technicians, typically in just 1-2 days.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300'
  },
  {
    icon: Sun,
    title: 'Activation',
    description: 'Your system is connected to the grid and activated to start generating clean energy.',
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300'
  },
  {
    icon: BarChart3,
    title: 'Monitor & Save',
    description: 'Track your energy production and watch your savings grow month after month.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300'
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 0.4
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="process" className="py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">4-Step Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transitioning to solar energy has never been easier with our streamlined approach
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Timeline Line - Hidden on mobile */}
          <motion.div 
            className="hidden md:block absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2 z-0"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          
          {/* Steps Container - Stacked on mobile */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex flex-col md:flex-row items-start"
                >
                  {/* Mobile Number Indicator - Above the card */}
                  <div className="md:hidden flex items-center mb-3 w-full">
                    <motion.div 
                      className={`w-8 h-8 rounded-full ${step.bgColor} border-4 ${step.borderColor} shadow-md flex items-center justify-center mr-3`}
                      variants={numberVariants}
                    >
                      <span className="font-bold text-gray-800">{index + 1}</span>
                    </motion.div>
                    <div className={`h-px flex-1 ${step.bgColor} bg-opacity-50`}></div>
                  </div>

                  {/* Step Card */}
                  <div className="w-full">
                    <motion.div 
                      className={`${step.bgColor} rounded-xl md:rounded-2xl p-5 md:p-6 shadow-md md:shadow-lg border ${step.borderColor} hover:shadow-lg transition-all duration-300`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`inline-flex items-center justify-center rounded-full p-2 md:p-3 ${step.bgColor} shadow-sm`}>
                          <step.icon className={`w-6 h-6 md:w-8 md:h-8 ${step.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                          <p className="text-sm md:text-base text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 md:mt-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-4 md:mb-0 md:pr-6 lg:pr-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">Ready to Start Your Solar Journey?</h3>
              <p className="text-sm md:text-base text-blue-100 mb-4 md:mb-6">
                Schedule a free consultation with our solar experts to learn how much you can save with a custom solar solution.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <motion.button 
                className="bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 font-medium md:font-semibold shadow-md hover:shadow-lg flex items-center text-sm md:text-base"
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;