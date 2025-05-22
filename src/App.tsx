// src/App.js (or your main layout component)

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import ContactForm from "./pages/ContactPage";
import SavingsCalculatorPage from "./pages/SavingsCalculatorPage";

function App() {
  useEffect(() => {
    const tawkToScript = document.createElement("script");
    tawkToScript.async = true;
    tawkToScript.src =
      "https://embed.tawk.to/682f25b1bcf30651e38b9a0b/1irs2mg8q";
    tawkToScript.charset = "UTF-8";
    tawkToScript.setAttribute("crossorigin", "*");

    document.head.appendChild(tawkToScript); 
  }, []); 

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-800 antialiased">
        <Header />
        <main className="flex-grow mt-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/calculator" element={<SavingsCalculatorPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
