import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Wilson",
    location: "San Diego, CA",
    quote:
      "Installing solar panels was the best decision we made for our home. We're saving over $200 each month on electricity, and the installation process was seamless.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Austin, TX",
    quote:
      "As a business owner, switching to solar has significantly reduced our operational costs. The team was professional from consultation to installation.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "Phoenix, AZ",
    quote:
      "I was hesitant about the initial investment, but after seeing the savings and tax benefits, I couldn't be happier with my decision to go solar.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Homeowners
            </span>{" "}
            Nationwide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our customers have to
            say about their solar experience.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[currentTestimonial].id} // Key changes to trigger animation
              custom={direction}
              // layout // 'layout' can sometimes cause unexpected jumps with 'x' animation; remove if issues arise.
              initial={{ opacity: 0, x: direction * 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -80, scale: 0.98 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Testimonial Image and Info */}
                <div className="w-full lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-2 shadow-md">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-200">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <div className="flex justify-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentTestimonial].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-white/30 fill-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="w-full lg:w-2/3 p-8 md:p-10 flex items-center">
                  <div>
                    <Quote className="w-8 h-8 text-blue-600 opacity-20 mb-4" />
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="h-px bg-gray-200 flex-1"></div>
                      <span className="px-4 text-sm text-gray-500">
                        {currentTestimonial + 1}/{testimonials.length}
                      </span>
                      <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            className="absolute top-1/2 left-0  bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl z-10 ml-[-1.5rem]"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </motion.button>

          {/* RIGHT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            className="absolute top-1/2 right-0  bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl z-10 mr-[-1.5rem]"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </motion.button>
        </div>

        {/* Testimonial Navigation Dots */}
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
          className="mt-8 flex justify-center space-x-2"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-blue-40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our 6,500+ Satisfied Customers?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our premium solar solutions and
              expert installation.
            </p>
            <motion.button
              className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center mx-auto"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;