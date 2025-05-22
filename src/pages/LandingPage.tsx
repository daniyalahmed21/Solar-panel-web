
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br bg-white text-gray-800 antialiased">
      <main className="flex-grow">
        <Hero />
        <div className="max-w-6xl mx-auto overflow-x-hidden  ">
          <Benefits />
          <Products />
          <HowItWorks />
          <Testimonials />
        </div>
      </main>

    </div>

  );
};

export default LandingPage;