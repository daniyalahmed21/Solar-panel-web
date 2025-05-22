import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Mr. Ahmed Khan",
    location: "Karachi, Sindh",
    quote:
      "Switching to SUNFINITY Solar was a fantastic decision for our family. Our K-Electric bills have reduced significantly, and the installation was handled very professionally. It's great to have reliable power!",
    image: "https://placehold.co/128x128/E2E8F0/4A5568?text=A.K.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ms. Fatima Ali",
    location: "Karachi, Sindh",
    quote:
      "As a business owner, energy costs were a major concern. SUNFINITY's commercial solar solution has not only cut our expenses but also improved our company's green credentials. Highly recommended!",
    image: "https://placehold.co/128x128/E2E8F0/4A5568?text=F.A.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jameel Siddiqui",
    location: "Clifton, Karachi",
    quote:
      "We were initially thinking about the investment, but the long-term savings and net metering made it clear. SUNFINITY's team guided us perfectly, and we're already seeing the returns on our K-Electric bills.",
    image: "https://placehold.co/128x128/E2E8F0/4A5568?text=J.S.",
    rating: 5,
  },
];

const ARROW_BUTTON_HALF_HEIGHT = "24px";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeTestimonial = (newIndex) => {
    if (newIndex === currentTestimonial) return;
    setDirection(newIndex > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(newIndex);
  };

  const nextTestimonial = () => {
    changeTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
  };

  const prevTestimonial = () => {
    changeTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
  };

  const slideDistance = 50;

  return (
    <section id="testimonials" className="py-20 md:py-28 overflow-x-hidden  "> {/* Kept light bg for section from prev. redesign */}
      <div className="container  mx-auto px-8 sm:px-6 lg:px-8 z-50">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"> {/* Darker gray for title */}
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"> {/* Orange Gradient */}
              Homeowners & Businesses
            </span>{" "}
            in Pakistan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers
            have to say about their SUNFINITY solar experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto min-h-[36rem] sm:min-h-[34rem] lg:min-h-[26rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[currentTestimonial].id}
              custom={direction}
              initial={{ opacity: 0, x: direction * slideDistance, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -slideDistance, scale: 0.98 }}
              transition={{
                x: { type: "spring", stiffness: 280, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col absolute inset-0 border border-gray-200/80" // Added subtle border
            >
              <div className="flex flex-col lg:flex-row flex-1">
                {/* Testimonial Image and Info with Orange Gradient Background */}
                <div className="w-full lg:w-2/5 bg-gradient-to-br from-orange-500 to-yellow-500 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white/50 shadow-lg" // Adjusted border opacity
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md"> {/* White bg for contrast */}
                      <Quote className="w-5 h-5 text-orange-600" /> {/* Orange quote icon */}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-sm sm:text-base text-yellow-100"> {/* Lighter text for location on orange bg */}
                      {testimonials[currentTestimonial].location}
                    </p>
                    <div className="flex justify-center mt-2 sm:mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < testimonials[currentTestimonial].rating
                              ? "text-yellow-300 fill-yellow-300" // Bright yellow stars
                              : "text-white/40 fill-white/20" // More subtle inactive stars
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote on White Background */}
                <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 opacity-10 mb-3 sm:mb-4" /> {/* Orange quote icon */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic min-h-[7em] sm:min-h-[6em]">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                  </div>
                  <div className="flex items-center pt-4  mt-auto"> {/* Added mt-auto */}
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="px-3 sm:px-4 text-xs sm:text-sm text-gray-500">
                      {currentTestimonial + 1}/{testimonials.length}
                    </span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-0 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-colors duration-200 hover:shadow-xl z-20 ml-[-1.5rem] lg:ml-[-2rem]"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              style={{ marginTop: `-${ARROW_BUTTON_HALF_HEIGHT}` }}
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" /> {/* Orange arrow icon */}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 right-0 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-colors duration-200 hover:shadow-xl z-20 mr-[-1.5rem] lg:mr-[-2rem]"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              style={{ marginTop: `-${ARROW_BUTTON_HALF_HEIGHT}` }}
            >
              <ChevronRight className="w-6 h-6 text-orange-600" /> {/* Orange arrow icon */}
            </motion.button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, staggerChildren: 0.1 },
            },
          }}
          className="mt-12 flex justify-center space-x-3"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => changeTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out outline-none focus:outline-none ring-offset-2 ring-offset-gray-50 focus:ring-2 focus:ring-orange-500`} // ring-offset for section bg
              animate={{ // Animate background color and scale for dots
                backgroundColor: index === currentTestimonial ? 'rgb(249 115 22)' /* orange-500 */ : 'rgb(209 213 219)' /* gray-300 */,
                scale: index === currentTestimonial ? 1.25 : 1,
              }}
              whileHover={{ 
                scale: 1.4, 
                backgroundColor: index !== currentTestimonial ? 'rgb(253 186 116)' /* orange-300 */ : undefined 
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* CTA Block with light background and orange gradient button */}
        <motion.div
          className="mt-20 bg-white rounded-2xl sm:shadow-xl overflow-hidden border border-gray-200/70" // Light background for CTA block
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"> {/* Dark gray title */}
              Ready to Start Your <span className="text-orange-600">SUNFINITY</span> Solar Success Story?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the SUNFINITY difference with our premium solar solutions and expert installation across Pakistan.
            </p>

            <Link to="/contact">
            
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-300/50 flex items-center mx-auto text-lg group"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;