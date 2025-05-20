import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br bg-white text-gray-800 antialiased">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-6xl mx-auto  md:py-20 space-y-20  ">
          <Benefits />
          <Products />
          <HowItWorks />
          <Testimonials />
          <ContactForm />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;