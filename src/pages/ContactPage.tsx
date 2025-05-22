import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  propertyType: string;
  contactPreference: string;
};

const companyContact = {
  phoneDisplay: "+92 333 3746752", // A. Qadir Gillani
  phoneLink: "tel:+923333746752",
  availability: "Mon-Sat, 9:00 AM - 6:00 PM PKT",
  email: "info@sunfinitysolar.pk", // Placeholder email
  addressLine1: "R-1500, Samanabad, F.B. Area Block 18",
  addressLine2: "Gulberg Town, Karachi, Pakistan",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', address: '', message: '',
    propertyType: 'residential', contactPreference: 'email'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^(?:\+92|0)?3\d{2}[ -]?\d{7}$/.test(formData.phone.replace(/\s|-/g, ''))) {
      newErrors.phone = 'Enter a valid Pakistani mobile number (e.g., 03XX-XXXXXXX)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setIsSubmitted(false);

      try {
        const response = await fetch('http://localhost:3001/api/send-contact-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        setIsSubmitting(false);
        const responseData = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
              name: '', email: '', phone: '', address: '', message: '',
              propertyType: 'residential', contactPreference: 'email'
            });
          }, 3000);
        } else {
          console.error('Form submission error:', responseData.message || responseData.details || 'Unknown error');
          alert(`Error: ${responseData.message || 'Could not send message. Please try again.'}`);
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error('Network or other error:', error);
        alert('An error occurred. Please check your connection and try again.');
      }
    }
  };

  const inputBaseClasses = "w-full p-3.5 border rounded-lg outline-none transition-all duration-200 ease-in-out";
  const inputFocusClasses = "focus:ring-2 focus:ring-orange-500 focus:border-orange-500";
  const inputErrorClasses = "border-red-500 ring-1 ring-red-500";
  const inputDefaultBorder = "border-gray-300";

  const getInputClasses = (hasError: boolean | undefined) =>
    `${inputBaseClasses} ${inputFocusClasses} ${hasError ? inputErrorClasses : inputDefaultBorder}`;

  const selectClasses = `${inputBaseClasses} ${inputFocusClasses} ${inputDefaultBorder} bg-white appearance-none`;
  const textAreaClasses = `${inputBaseClasses} ${inputFocusClasses} ${inputDefaultBorder} resize-none`;

  return (
    <section id="contact" className="py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your solar journey with <span className="font-semibold text-orange-600">SUNFINITY</span>? Fill out the form below and our team will get back to you promptly.
          </p>
        </motion.div>

        {/* Consider adding overflow-x-hidden here if layout prop alone isn't enough, though it might clip shadows if not careful */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            className="w-full lg:w-2/3 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            layout // Added layout prop
          >
            {isSubmitted ? (
              <div className="p-8 flex flex-col items-center justify-center min-h-[450px] text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="bg-green-100 rounded-full p-4 mb-6 inline-block">
                    <Check className="h-12 w-12 text-green-600" />
                  </div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Thank You!</h3>
                <p className="text-lg text-gray-700">
                  Your message has been sent successfully. A SUNFINITY solar expert will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      className={getInputClasses(!!errors.name)} placeholder="e.g., Ahmed Khan" />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      className={getInputClasses(!!errors.email)} placeholder="e.g., ahmed@example.com" />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className={getInputClasses(!!errors.phone)} placeholder="e.g., 0333 1234567" />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">Address (Optional)</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}
                      className={getInputClasses(false)} placeholder="e.g., House 123, DHA Phase 6, Karachi" />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
                    <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange} className={selectClasses}>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contactPreference" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Contact</label>
                    <select id="contactPreference" name="contactPreference" value={formData.contactPreference} onChange={handleChange} className={selectClasses}>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message (Optional)</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                    className={textAreaClasses} placeholder="Tell us about your energy needs or any questions..." />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white p-3.5 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center text-base shadow-lg hover:shadow-orange-300/50 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { y: -2, scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Your Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            layout // Added layout prop
          >
            <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-6 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-orange-400">Get in Touch Directly</h3>
              <div className="space-y-8 flex-grow">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-orange-400" />
                  <div>
                    <h4 className="font-semibold text-lg mb-0.5">Phone</h4>
                    <a href={companyContact.phoneLink} className="text-slate-200 hover:text-white transition-colors block">{companyContact.phoneDisplay}</a>
                    <p className="text-sm text-slate-400 mt-0.5">{companyContact.availability}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-orange-400" />
                  <div>
                    <h4 className="font-semibold text-lg mb-0.5">Email</h4>
                    <a href={`mailto:${companyContact.email}`} className="text-slate-200 hover:text-white transition-colors block">{companyContact.email}</a>
                    <p className="text-sm text-slate-400 mt-0.5">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-orange-400" />
                  <div>
                    <h4 className="font-semibold text-lg mb-0.5">Office</h4>
                    <p className="text-slate-200">{companyContact.addressLine1}</p>
                    <p className="text-slate-200">{companyContact.addressLine2}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;