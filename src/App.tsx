// src/App.js (or your main layout component)

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import ContactForm from "./pages/ContactPage";
// ... other page imports

function App() {
  useEffect(() => {
    // Your Tawk.to Script
    const tawkToScript = document.createElement("script");
    tawkToScript.async = true;
    tawkToScript.src =
      "https://embed.tawk.to/682f25b1bcf30651e38b9a0b/1irs2mg8q"; // Your specific Tawk.to SRC
    tawkToScript.charset = "UTF-8";
    tawkToScript.setAttribute("crossorigin", "*");

    document.head.appendChild(tawkToScript); // Append to head (or end of body)

    // Optional: Basic cleanup for some scenarios, though Tawk.to usually manages itself well.
    // return () => {
    //   if (document.head.contains(tawkToScript)) {
    //     document.head.removeChild(tawkToScript);
    //   }
    //   // Clean up global Tawk_API object if necessary, check Tawk.to docs for best practices on SPA unmount
    //   // if (window.Tawk_API) {
    //   //   delete window.Tawk_API;
    //   //   delete window.Tawk_LoadStart;
    //   // }
    // };
  }, []); // Empty dependency array ensures this runs once after initial mount

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-800 antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactForm/>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
