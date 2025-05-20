import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Leaf, Shield, Home, BatteryCharging, Calendar } from 'lucide-react';

const benefitItems = [
  {
    title: 'Reduce Energy Bills',
    description: 'Save up to 70% on monthly electricity costs with our efficient solar panels.',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Eco-Friendly Solution',
    description: 'Cut carbon emissions and reduce your environmental footprint.',
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: '25-Year Warranty',
    description: 'Industry-leading protection with our comprehensive warranty program.',
    icon: Shield,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Increase Home Value',
    description: 'Boost your property value by up to 4.1% with solar installation.',
    icon: Home,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Battery Storage',
    description: 'Optional battery solutions for energy independence during outages.',
    icon: BatteryCharging,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    title: 'Tax Incentives',
    description: 'Take advantage of federal and state tax credits and incentives.',
    icon: Calendar,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="benefits" className="py-20 ">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Solar Energy?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience the countless benefits of switching to clean, renewable solar energy for your home or business.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefitItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`${item.bgColor} rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-200 font-medium">
            Discover More Benefits
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;