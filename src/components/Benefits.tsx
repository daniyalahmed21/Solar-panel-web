import React from 'react';
import { motion } from 'framer-motion';
import { 
    DollarSign, Leaf, Shield, Home, BatteryCharging, 
    Landmark, ArrowRightLeft, Lock, ArrowRight,
    ShieldCheck, Smartphone 
} from 'lucide-react';

const benefitItems = [
  {
    title: 'Slash Energy Bills',
    description: 'Reduce your monthly K-Electric bills by an average of 50% with our efficient solar power systems.',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500'
  },
  {
    title: 'Eco-Friendly Solution',
    description: 'Contribute to a greener Pakistan by cutting carbon emissions and reducing your environmental footprint.',
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-500'
  },
  {
    title: '10-Year Panel Warranty',
    description: 'Benefit from our direct 10-year warranty on solar panels. We handle all claims efficiently for your peace of mind.',
    icon: Shield,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-500'
  },
  {
    title: 'Increase Property Value',
    description: 'Solar installations are a smart investment, often enhancing property appeal and market value in Karachi.',
    icon: Home,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-500'
  },
  {
    title: 'Uninterrupted Power Supply',
    description: 'Gain energy independence and combat load shedding. Expect around 4 hours of backup with typical 200-300Ah battery setups, depending on your load.',
    icon: BatteryCharging,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    borderColor: 'border-teal-500'
  },
  { 
    title: 'Net Metering Advantage',
    description: 'Export surplus solar energy to the K-Electric grid and earn credits on your electricity bill under Pakistan\'s net metering policy.',
    icon: ArrowRightLeft,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    borderColor: 'border-cyan-500'
  },
  { 
    title: 'Beat Tariff Hikes',
    description: 'Secure predictable energy costs and protect your household budget from the volatility of rising electricity tariffs in Pakistan.',
    icon: Lock,
    color: 'text-lime-600',
    bgColor: 'bg-lime-100',
    borderColor: 'border-lime-500'
  },
  { 
    title: 'Low Maintenance Systems',
    description: 'Our high-quality solar solutions, including advanced LiFePO4 batteries, require minimal maintenance, saving you time and effort.',
    icon: ShieldCheck,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100',
    borderColor: 'border-slate-500'
  },
  { 
    title: 'Smart Energy Control',
    description: 'Monitor your energy production and consumption in real-time with our intuitive smart monitoring systems, often accessible via a mobile app.',
    icon: Smartphone,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-500'
  }
];

const Benefits = () => {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      // Corrected ease function
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 }, 
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 16,
        staggerChildren: 0.05 
      }
    }
  };

  const cardChildIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 10, duration: 0.4 } }
  };
  const cardChildTextVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="benefits" className="py-20 md:py-28"> {/* Added py-20 md:py-28 to section from your previous code */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionHeaderVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Solar with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">SUNFINITY</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the numerous advantages of transitioning to clean, reliable, and cost-effective solar energy for your home or business in Karachi.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {benefitItems.map((item) => (
            <motion.div 
              key={item.title}
              variants={cardVariants}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-gray-200/70 border border-t-4 ${item.borderColor} flex flex-col h-full`}
              whileHover={{ y: -10, scale: 1.03, transition: {type: "spring", stiffness:300, damping:10} }}
            >
              <motion.div 
                className={`${item.bgColor} rounded-lg w-16 h-16 flex items-center justify-center mb-6 self-start shadow`}
                variants={cardChildIconVariants}
              >
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-800 mb-3"
                variants={cardChildTextVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-base flex-grow leading-relaxed"
                variants={cardChildTextVariants}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          variants={sectionHeaderVariants} // Reusing for consistency, adjust delay if needed
          viewport={{ once: true }}
          transition={{delay: 0.3}} // Delay CTA slightly
        >
          <motion.button 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-orange-300/50 flex items-center justify-center mx-auto group"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Your Free Solar Quote
            <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;