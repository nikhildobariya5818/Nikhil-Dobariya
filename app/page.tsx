import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import InfrastructureComponent from './components/Infrastructure';
import QualityComponent from './components/Quality';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Stats />
        <Products />
        <InfrastructureComponent />
        <QualityComponent />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
