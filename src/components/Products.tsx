import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Package, BatteryCharging as BatteryIcon } from "lucide-react";
import homeSolution from '../assets/home-solution.jpg';
import batteryImage from '../assets/powerbank.jpg';
const RESIDENTIAL_IMG_PLACEHOLDER = homeSolution;
const BATTERY_IMG_PLACEHOLDER = batteryImage;

const productsData = [
  {
    id: 1,
    name: "SUNFINITY Home Solution",
    icon: Package,
    description: "Tailored solar solutions for homes of all sizes in Karachi, maximizing savings and energy independence.",
    image: RESIDENTIAL_IMG_PLACEHOLDER,
    features: [
      "High-efficiency solar panels (585W commonly used)",
      "Sleek, aesthetically pleasing installation",
      "Optimized energy conversion performance",
      "Durable, weather-resistant construction for local conditions",
      "Smart energy monitoring system included",
      "10-Year Panel Warranty (claims handled directly by us)",
    ],
  },
  {
    id: 3, 
    name: "SUNFINITY PowerBank", // Assuming this is based on/similar to ATOM Power
    icon: BatteryIcon,
    description: "Advanced LiFePO4 battery storage for uninterrupted power, ensuring energy security during K-Electric outages. Features technology made in Pakistan.", // Highlight LiFePO4 & origin
    image: BATTERY_IMG_PLACEHOLDER,
    features: [
      "Advanced LiFePO4 Technology ", // Atom Power PDF
      "Capacities like 2.56kWh & 5.12kWh available ", // Atom Power PDF
      "Long Cycle Life (6000+ cycles @0.5C, 70% EOL) ", // Atom Power PDF
      "Provides approx. 4 hours backup on typical full load", // Owner info, consistent with battery specs
      "Advanced Battery Management System (BMS) ", // Atom Power PDF
      "Interactive LCD Screen for on-site data ", // Atom Power PDF
      "Remote WiFi Monitoring via online dashboard ", // Atom Power PDF
      "High Depth of Discharge (~90%) ", // Atom Power PDF
      "Flexible Mounting (Wall & Table-Top)", // Atom Power PDF
      "5-Year Local Warranty (backed by ATOM Power) ", // CRITICAL UPDATE from ATOM Power PDF
      "Zero Maintenance & Environmentally Friendly ", // Atom Power PDF
      "Parallel connection for future capacity expansion ", // Atom Power PDF
    ],
  },
];

// whyChooseSunfinity remains highly relevant
const whyChooseSunfinity = [
  "Top-Tier, High-Efficiency Solar Technology",
  "Expertly Engineered for Pakistani Climate",
  "User-Friendly Smart Energy Monitoring",
  "Direct 10-Year Panel Warranty & Support",
  "Complete Turnkey Project Management",
  "Dedicated Local Installation Teams",
];


const Products = () => {
  const [activeProduct, setActiveProduct] = useState(productsData.length > 0 ? productsData[0] : null);
  
  const showcaseRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; 
    } else if (showcaseRef.current) {
      if (window.innerWidth < 1024) { 
        showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeProduct]);


  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };
  
  if (!activeProduct) {
    return <section id="products" className="py-20 md:py-28 text-center">Loading products...</section>;
  }

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">Solar Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore SUNFINITY's range of cutting-edge solar products and complete installation services, designed for Pakistan's energy needs.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
          {/* Product Showcase */}
          <motion.div
            ref={showcaseRef}
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full border border-gray-200/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`showcase-${activeProduct.id}`}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="relative h-64 sm:h-80 md:h-96 xl:h-[28rem]">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
                      <motion.h3
                        key={`title-${activeProduct.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1, ease:"easeOut" }}
                        className="text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-1 md:mb-2"
                      >
                        {activeProduct.name}
                      </motion.h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <motion.p
                      key={`desc-${activeProduct.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2, ease:"easeOut" }}
                      className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed"
                    >
                      {activeProduct.description}
                    </motion.p>

                    <motion.div
                      key={`features-${activeProduct.id}`}
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.07 } },
                        hidden: {}
                      }}
                    >
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {activeProduct.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center"
                            variants={{hidden: {opacity:0, x:-20}, visible: {opacity:1, x:0}}}
                          >
                            <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      className="mt-8 md:mt-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (activeProduct.features.length * 0.07) }}
                    >
                      {/* <motion.button 
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-300/50 flex items-center text-base md:text-lg group"
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button> */}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Product Selector */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 h-full border border-gray-200/80">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Our Product Range
              </h3>

              <div className="space-y-4 mb-8 md:mb-10">
                {productsData.map((product) => (
                  <motion.button
                    key={product.id}
                    className={`w-full p-4 md:p-5 rounded-xl text-left transition-all duration-300 ease-in-out border-2 
                      ${ activeProduct.id === product.id
                          ? "bg-orange-500 text-white border-orange-600 shadow-lg"
                          : "bg-white hover:bg-gray-100 border-gray-200 hover:border-gray-300"
                      }`}
                    onClick={() => setActiveProduct(product)}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center mb-1.5">
                      <product.icon className={`w-6 h-6 mr-3 flex-shrink-0 ${activeProduct.id === product.id ? 'text-white' : 'text-orange-500'}`} />
                      <h4 className={`font-semibold text-lg md:text-xl ${activeProduct.id === product.id ? 'text-white' : 'text-gray-800'}`}>
                        {product.name}
                      </h4>
                    </div>
                    <p className={`text-sm md:text-base ${activeProduct.id === product.id ? 'text-orange-100' : 'text-gray-600'}`}>
                      {product.description.length > 80 ? product.description.substring(0, 80) + "..." : product.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Why Choose SUNFINITY?
                </h4>
                <ul className="space-y-3">
                  {whyChooseSunfinity.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true, amount:0.5 }}
                    >
                      <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base">{item}</p>
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