import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import About from './components/About';
import ProductionProcess from './components/ProductionProcess';
import ShippingPartners from './components/ShippingPartners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#151515]">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <Products />
      <About />
      <ProductionProcess />
      <ShippingPartners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
