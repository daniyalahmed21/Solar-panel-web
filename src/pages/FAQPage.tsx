// src/pages/FAQPage.js (or wherever you place your page components)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: "General Questions About Solar Energy",
    questions: [
      {
        q: "What is solar energy and how does it work?",
        a: "Solar energy is power derived from the sun's radiation. Solar photovoltaic (PV) panels on your rooftop capture sunlight and convert it into DC (Direct Current) electricity. An inverter then converts this DC electricity into AC (Alternating Current) electricity, which can be used to power your home, business, or industrial unit in Karachi."
      },
      {
        q: "Why should I switch to solar energy with SUNFINITY in Pakistan?",
        a: (
          <>
            <p className="mb-2">Switching to solar with SUNFINITY offers numerous advantages, especially in Pakistan:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Significant Bill Reduction:</strong> Reduce your K-Electric (or other utility) bills by an average of 50%.</li>
              <li><strong>Combat Load Shedding:</strong> With our SUNFINITY PowerBank solutions, enjoy uninterrupted power supply. Expect around 4 hours of backup on typical full load with 200-300Ah battery setups.</li>
              <li><strong>Eco-Friendly:</strong> Lower your carbon footprint and contribute to a greener Pakistan.</li>
              <li><strong>Energy Independence:</strong> Decrease reliance on the national grid and protect yourself from rising electricity tariffs.</li>
              <li><strong>Net Metering Benefits:</strong> Export surplus energy back to the grid (e.g., K-Electric) and earn credits on your bill.</li>
              <li><strong>Increased Property Value:</strong> Solar installations are a smart investment that can enhance property appeal.</li>
            </ul>
          </>
        )
      },
      {
        q: "What types of solar systems does SUNFINITY install?",
        a: "SUNFINITY specializes in complete solar solutions tailored to your needs, including grid-tied systems (with net metering), hybrid systems (grid-tied with battery backup like our SUNFINITY PowerBank – highly recommended for areas with load shedding), and off-grid systems. We handle the entire project for residential, commercial, and industrial clients, providing high-quality solar panels, inverters, and advanced LiFePO4 batteries."
      }
    ]
  },
  {
    category: "Costs, Savings & Incentives",
    questions: [
      {
        q: "How much can I typically save with a SUNFINITY solar system?",
        a: "Our clients typically see an average reduction of 50% in their electricity bills. For instance, an air conditioner that might consume 5-6 units per hour from the grid can have its grid consumption reduced to 2-3 units per hour when powered by solar during the day. Actual savings vary based on your system size, energy usage patterns, and local utility tariffs."
      },
      {
        q: "What is the payback period for a solar investment in Karachi?",
        a: "The payback period for a solar system in Karachi generally ranges from 3 to 6 years. This depends on your initial investment, the amount of electricity your system generates, your savings on utility bills, and any benefits from net metering."
      },
      {
        q: "Are there government incentives or financing for solar in Pakistan?",
        a: "The Government of Pakistan and the State Bank of Pakistan (SBP) often introduce policies and financing schemes to promote renewable energy, including solar. These can include concessional financing rates or potential tax benefits on solar equipment. SUNFINITY can provide information on currently available schemes."
      }
    ]
  },
  {
    category: "Solar Panels & Equipment",
    questions: [
      {
        q: "What kind of solar panels does SUNFINITY use?",
        a: "We use high-quality, Tier-1 high-efficiency solar panels. While we offer a range from 150W up to 700W, the 585W panel is a commonly used and effective option for many installations in Pakistan."
      },
      {
        q: "What is the warranty on solar panels?",
        a: "SUNFINITY provides a direct 10-Year Panel Warranty for the solar panels we install. We handle all warranty claims efficiently for your peace of mind."
      },
      {
        q: "What is the expected lifespan of solar panels?",
        a: "High-quality solar panels are very durable and have an expected operational lifespan of 25 years or more. They are designed to withstand various weather conditions prevalent in Karachi and other parts of Pakistan."
      },
      {
        q: "Tell me about the SUNFINITY PowerBank.",
        a: (
          <>
            <p className="mb-2">Our SUNFINITY PowerBank utilizes advanced LiFePO4 battery technology (often from "Made in Pakistan" initiatives like ATOM Power) for reliable energy storage. Key features include:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Capacities:</strong> Options like 2.56kWh & 5.12kWh (based on 100Ah LFP cells).</li>
              <li><strong>Backup:</strong> Approx. 4 hours of backup on typical full load (e.g., with 200-300Ah equivalent systems).</li>
              <li><strong>Long Lifespan:</strong> 6000+ cycles and high Depth of Discharge (~90%).</li>
              <li><strong>Smart Features:</strong> Advanced Battery Management System (BMS), interactive LCD, and WiFi remote monitoring.</li>
              <li><strong>Warranty:</strong> Core battery components typically come with a 5-Year Local Warranty.</li>
              <li><strong>Other:</strong> Zero maintenance, flexible mounting, parallel connection capable, UN 38.3 certified.</li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    category: "Installation Process",
    questions: [
      {
        q: "How long does a typical solar system installation take?",
        a: "Our expert installation teams can typically complete a standard residential or small commercial solar system installation in just 1 to 2 days, ensuring a swift and efficient process."
      },
      {
        q: "What does SUNFINITY's installation process involve?",
        a: "Our streamlined 4-step process is: 1. Consultation & Custom Design based on your needs and site survey. 2. Professional Installation by our certified technicians. 3. System Activation & K-Electric Grid Connection (including net metering setup). 4. Ongoing Monitoring, Savings review, and Support."
      }
    ]
  },
  {
    category: "Warranty & Maintenance",
    questions: [
      {
        q: "How does SUNFINITY handle warranty claims?",
        a: "We pride ourselves on providing excellent customer service. SUNFINITY handles all warranty claims directly for the products we install, including the 10-year panel warranty and battery warranties. This provides you with a single point of contact and dedicated support."
      },
      {
        q: "What kind of maintenance does a solar system require?",
        a: "Solar PV systems are generally very low maintenance. Regular cleaning of the solar panels (a few times a year to remove dust common in Karachi) is recommended for optimal performance. LiFePO4 batteries, like those in our PowerBank, are virtually maintenance-free."
      }
    ]
  },
  {
    category: "Net Metering in Karachi",
    questions: [
      {
        q: "What is net metering with K-Electric?",
        a: "Net metering is a system that allows you to send any surplus electricity generated by your SUNFINITY solar system back to the K-Electric grid. K-Electric will then credit your electricity bill for this exported energy, which can further reduce your monthly costs significantly or even result in a net credit."
      },
      {
        q: "Does SUNFINITY help with the K-Electric net metering application?",
        a: "Yes, absolutely. SUNFINITY provides end-to-end service, which includes assisting you with the complete net metering application process, documentation, and coordination with K-Electric for the installation of the bidirectional meter."
      }
    ]
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string | JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left text-gray-700 hover:text-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-md md:text-lg font-medium">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-orange-600' : 'text-gray-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '20px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: '0px' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-gray-600 text-sm md:text-base leading-relaxed pl-2 pr-6" // Added some padding
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQPage = () => {
  return (
    <div className="flex flex-col mt-5 min-h-screen bg-gray-50"> {/* Consistent light background */}
      <main className="flex-grow">
        <section id="faq" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find answers to common queries about SUNFINITY's solar solutions, services, and the benefits of going solar in Karachi & Pakistan.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqData.map((categoryItem, categoryIndex) => (
                <motion.div
                  key={categoryItem.category}
                  className="mb-12 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/80" // Cards for categories
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6 pb-3 border-b border-orange-200">
                    {categoryItem.category}
                  </h2>
                  <div className="space-y-1">
                    {categoryItem.questions.map((item, qIndex) => (
                      <FAQItem key={qIndex} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-16 md:mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount:0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Can't find the answer you're looking for? Our experts are here to help!
              </p>
              <Link
                to="/contact" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-orange-300/50 inline-flex items-center group"
              >
                Contact Our Experts
                <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;