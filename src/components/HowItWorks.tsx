import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Home, Sun, BarChart3, ArrowRight } from 'lucide-react';

// Updated step information for SUNFINITY in Karachi/Pakistan
const steps = [
  {
    icon: Lightbulb,
    title: '1. Consultation & Design',
    description: 'Our experts assess your energy needs, site suitability, and design a custom solar solution tailored for your Karachi home or business.',
    color: 'text-orange-600',    // Using orange as a primary accent
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-500' // Accent border color
  },
  {
    icon: Home, // Using Home icon for installation, Wrench could also work
    title: '2. Professional Installation',
    description: 'Our certified technicians handle the complete installation professionally, typically within 1-2 days, ensuring minimal disruption.',
    color: 'text-blue-600',     // Kept varied colors for step distinction
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500'
  },
  {
    icon: Sun,
    title: '3. System Activation',
    description: 'Your new solar system is seamlessly connected, configured with K-Electric for net metering (if applicable), and activated to start generating clean energy.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-500'
  },
  {
    icon: BarChart3,
    title: '4. Monitor, Save & Support',
    description: 'Track your energy production and watch your savings grow. Plus, enjoy peace of mind with our direct 10-year panel warranty support.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-500'
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slightly adjusted stagger
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, // Adjusted spring
        damping: 18,
      }
    }
  };
  
  const lineVariants = { // For the central timeline line
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%", // Animate height from 0 to 100%
      opacity: 1,
      transition: {
        duration: 0.8 * steps.length * 0.3, // Match overall stagger
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3 // Delay slightly for items to start appearing
      }
    }
  };


  return (
    <section id="process" className="py-20 md:py-28 bg-white"> {/* Section bg to white for card pop */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 md:mb-20" // Increased bottom margin
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">4-Step Process</span> {/* Orange Gradient */}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transitioning to solar energy with SUNFINITY is seamless. Here’s how we power your journey to savings and sustainability in Karachi.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }} // Trigger slightly earlier
          variants={containerVariants}
        >
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-1 transform -translate-x-1/2 z-0"> {/* Adjusted top/bottom for better fit */}
             <motion.div 
                className="h-full w-full bg-gray-300 rounded-full" // Neutral gray line
                variants={lineVariants} 
             />
          </div>
          
          <div className="flex flex-col md:space-y-0 space-y-8 relative z-10"> {/* md:space-y-0 to remove stacking space on desktop */}
            {steps.map((step, index) => {
              const isEvenMd = index % 2 === 0; // For potential zigzag, though current is grid
              return (
                <motion.div 
                  key={step.title} 
                  variants={itemVariants}
                  // For zigzag layout on desktop, add conditional classes for alignment:
                  // className={`md:w-1/2 ${isEvenMd ? 'md:self-start md:pr-8' : 'md:self-end md:pl-8'}`}
                  // For current simpler grid/stacking:
                  className={`md:max-w-[calc(50%-1.5rem)] ${isEvenMd ? 'md:self-start' : 'md:self-end md:ml-auto'}`} // Simplified alternating for 2-col feel
                >
                  {/* Mobile Number/Indicator - Above card */}
                  <div className="md:hidden flex items-center mb-3">
                    <div className={`w-10 h-10 rounded-full ${step.bgColor} border-2 ${step.borderColor} shadow-md flex items-center justify-center mr-3`}>
                      <span className={`font-bold text-lg ${step.color}`}>{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title.substring(step.title.indexOf(" ") + 1)}</h3> {/* Title next to number */}
                  </div>

                  {/* Step Card - Redesigned */}
                  <motion.div 
                    className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 ${step.borderColor} w-full`}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`hidden md:inline-flex items-center justify-center rounded-lg p-3 ${step.bgColor} shadow-md`}> {/* Icon bg color from step */}
                        <step.icon className={`w-8 h-8 ${step.color}`} /> {/* Icon color from step */}
                      </div>
                      <div className="flex-1">
                        <h3 className="hidden md:block text-xl lg:text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <motion.button 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-orange-300/50 flex items-center justify-center mx-auto group"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;