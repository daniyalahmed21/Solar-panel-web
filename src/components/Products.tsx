import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "SolarPrime Residential",
    description: "Our flagship residential solar panel system, perfect for homes of all sizes.",
    image: "https://images.pexels.com/photos/8853536/pexels-photo-8853536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "High-efficiency monocrystalline panels",
      "Sleek, low-profile design",
      "22% energy conversion rate",
      "Weather-resistant construction",
      "Integrated monitoring system",
      "25-year warranty"
    ]
  },
  {
    id: 2,
    name: "SolarMax Commercial",
    description: "Powerful commercial solution for businesses looking to reduce operational costs.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Industrial-grade panel construction",
      "Scalable system design",
      "25% energy conversion rate",
      "Enhanced durability for commercial settings",
      "Advanced monitoring and analytics",
      "25-year warranty with business support"
    ]
  },
  {
    id: 3,
    name: "PowerStore Battery",
    description: "Advanced battery storage system to maximize your solar investment.",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "13.5 kWh storage capacity",
      "Seamless power backup during outages",
      "Smart power management system",
      "Compact, wall-mounted design",
      "Real-time energy monitoring",
      "10-year warranty"
    ]
  }
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Solar Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of cutting-edge solar products designed to meet your energy needs
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Product Showcase */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-full">
              <motion.div
                key={`image-${activeProduct.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 sm:h-80 md:h-96"
              >
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <motion.h3
                    key={`title-${activeProduct.id}`}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeProduct.name}
                  </motion.h3>
                </div>
              </motion.div>

              <div className="p-6 md:p-8">
                <motion.p
                  key={`desc-${activeProduct.id}`}
                  className="text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {activeProduct.description}
                </motion.p>

                <motion.div
                  key={`features-${activeProduct.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeProduct.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start bg-gray-50 rounded-lg p-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.button 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Product Selector */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Explore Our Products
              </h3>

              <div className="space-y-4 mb-8">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeProduct.id === product.id
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 shadow-md"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveProduct(product)}
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="font-bold text-lg text-gray-900 mb-1">
                      {product.name}
                    </h4>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Our Products
                </h4>
                <ul className="space-y-3">
                  {[
                    "Industry-leading efficiency ratings",
                    "Designed for extreme weather conditions",
                    "Smart monitoring via our mobile app",
                    "Comprehensive warranty coverage"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;