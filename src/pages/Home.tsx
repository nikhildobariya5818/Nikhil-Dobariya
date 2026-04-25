import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Products from '../components/Products';
import Infrastructure from '../components/Infrastructure';
import Quality from '../components/Quality';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Infrastructure />
      <Quality />
      <Testimonials />
      <CTA />
    </>
  );
}
