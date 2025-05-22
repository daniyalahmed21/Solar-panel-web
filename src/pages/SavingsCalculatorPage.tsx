import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { DollarSign, Zap, Thermometer, TrendingUp, Leaf, ArrowRight, Sun } from 'lucide-react';

const PERCENTAGE_SAVING = 0.50;
const AVG_COST_PER_KW_PKR = 160000; 
const AVG_KWH_PRODUCTION_PER_KW_YEAR = 1750;
const CO2_OFFSET_PER_KWH_KG = 0.7;

// Type for our results state
interface CalculationResults {
  monthlyBillPKR: number;
  annualBillPKR: number;
  annualSavingsPKR: number;
  estimatedSystemSizeKW: string;
  estimatedAnnualProductionKWh: number;
  estimatedSystemCostPKR: number;
  paybackPeriodYears: string;
  annualCO2SavedKG: number;
}

const SavingsCalculatorPage: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<string>('');
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resultsRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; 
    } else if (results && resultsRef.current) {
      if (window.innerWidth < 768) {
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [results]);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMonthlyBill(value);
      if (error) setError('');
    }
  };

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault();
    const billAmount = parseInt(monthlyBill);

    if (!monthlyBill || isNaN(billAmount) || billAmount <= 0) {
      setError('Please enter a valid monthly electricity bill amount (e.g., 15000).');
      setResults(null);
      return;
    }
    setError('');
    setIsLoading(true);
    setResults(null); 

    setTimeout(() => {
      const monthlyBillPKR = billAmount;
      const annualBillPKR = monthlyBillPKR * 12;
      const annualSavingsPKR = annualBillPKR * PERCENTAGE_SAVING;

      let estimatedSystemSizeKW_num = Math.max(1, parseFloat((monthlyBillPKR / 4000).toFixed(1)));
      estimatedSystemSizeKW_num = Math.min(estimatedSystemSizeKW_num, 15);

      const estimatedAnnualProductionKWh = estimatedSystemSizeKW_num * AVG_KWH_PRODUCTION_PER_KW_YEAR;
      const estimatedSystemCostPKR = estimatedSystemSizeKW_num * AVG_COST_PER_KW_PKR;
      const paybackPeriodNum = annualSavingsPKR > 0 ? (estimatedSystemCostPKR / annualSavingsPKR) : 0;
      const annualCO2SavedKG = estimatedAnnualProductionKWh * CO2_OFFSET_PER_KWH_KG;

      setResults({
        monthlyBillPKR,
        annualBillPKR,
        annualSavingsPKR: Math.round(annualSavingsPKR),
        estimatedSystemSizeKW: estimatedSystemSizeKW_num.toFixed(1),
        estimatedAnnualProductionKWh: Math.round(estimatedAnnualProductionKWh),
        estimatedSystemCostPKR: Math.round(estimatedSystemCostPKR),
        paybackPeriodYears: paybackPeriodNum > 0 ? paybackPeriodNum.toFixed(1) : "N/A",
        annualCO2SavedKG: Math.round(annualCO2SavedKG),
      });
      setIsLoading(false);
    }, 1000);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-PK', { 
      style: 'currency', 
      currency: 'PKR', 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).format(value).replace("PKR", "PKR ");
  };

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-PK').format(value);
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // Properly typed variants
  const resultCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.4, 
        ease: "easeOut" 
      }
    })
  };

  const resultsDisplayData = results ? [
    { title: "Current Annual Bill", value: formatCurrency(results.annualBillPKR), icon: DollarSign, color: "text-red-500", bgColor: "bg-red-100" },
    { title: "Est. Annual Savings (50%)", value: formatCurrency(results.annualSavingsPKR), icon: TrendingUp, color: "text-green-600", bgColor: "bg-green-100" },
    { title: "Est. Payback Period", value: `${results.paybackPeriodYears} Years`, icon: Zap, color: "text-purple-600", bgColor: "bg-purple-100" },
    { title: "Suggested System Size", value: `${results.estimatedSystemSizeKW} kW`, icon: Thermometer, color: "text-blue-500", bgColor: "bg-blue-100" },
    { title: "Est. Annual Production", value: `${formatNumber(results.estimatedAnnualProductionKWh)} kWh`, icon: Sun, color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { title: "Est. CO2 Reduction / Year", value: `${formatNumber(results.annualCO2SavedKG)} kg`, icon: Leaf, color: "text-teal-500", bgColor: "bg-teal-100" },
  ] : [];

  return (
      <main className="flex-grow">
        <section id="savings-calculator" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 md:mb-20"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                Solar Savings <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">Calculator</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Estimate your potential savings with a SUNFINITY solar solution in Karachi. Enter your average monthly electricity bill to get started.
              </p>
            </motion.div>

            <motion.div
              className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <form onSubmit={calculateSavings} className="space-y-6">
                <div>
                  <label htmlFor="monthlyBill" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Average Monthly Electricity Bill (PKR)
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="monthlyBill"
                      id="monthlyBill"
                      value={monthlyBill}
                      onChange={handleBillChange}
                      className={`w-full p-3.5 pl-10 border rounded-lg outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-orange-500 ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                      placeholder="e.g., 15000"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      required
                    />
                  </div>
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-orange-300/50 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!isLoading ? { y: -2, scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </>
                  ) : (
                    <>
                      Calculate Savings
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <AnimatePresence>
              {results && (
                <motion.div
                  ref={resultsRef}
                  className="mt-12 md:mt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 md:mb-12">
                    Your Estimated Solar Savings & System Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {resultsDisplayData.map((item, index) => (
                      <motion.div
                        key={item.title}
                        custom={index}
                        variants={resultCardVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200/60 text-center flex flex-col justify-start items-center"
                      >
                        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${item.bgColor} mb-4 shadow-md`}>
                          <item.icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1 h-12 flex items-center justify-center">{item.title}</h3>
                        <p className="text-2xl md:text-3xl font-bold text-gray-900">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-10 leading-relaxed max-w-2xl mx-auto">
                    <strong>Disclaimer:</strong> These calculations are estimates based on average values for Karachi and your provided bill. Actual savings, system size, cost, and payback period can vary based on your specific energy consumption, roof characteristics, system design, current K-Electric tariffs, and available financing. For an accurate assessment and detailed quote, please <a href="/contact" className="text-orange-600 hover:underline font-medium">contact us for a free consultation</a>.
                  </p>
                  <motion.div 
                    className="mt-10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (resultsDisplayData.length * 0.1) }}
                  >
                    <a 
                      href="/contact"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-orange-300/50 inline-flex items-center group"
                    >
                      Get a Detailed Quote
                      <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
  );
};

export default SavingsCalculatorPage;