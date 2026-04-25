/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProductsList from './pages/ProductsList';
import CategoryDetail from './pages/CategoryDetail';
import ProductDetail from './pages/ProductDetail';
import RequestQuote from './pages/RequestQuote';
import JobWork from './pages/JobWork';
import QualityCertifications from './pages/QualityCertifications';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';
import ExportSolutions from './pages/ExportSolutions';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/quality" element={<QualityCertifications />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/job-work" element={<JobWork />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/export-solutions" element={<ExportSolutions />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
