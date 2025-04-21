import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FriggebodPage from './pages/FriggebodPage';
import AttefallshusPage from './pages/AttefallshusPage';
import GreenhousePage from './pages/GreenhousePage';
import './App.css'; // Optional: App-specific styles

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductShowcase />
              <About />
              <Contact />
            </>
          } />
          <Route path="/friggebod" element={<FriggebodPage />} />
          <Route path="/attefallshus" element={<AttefallshusPage />} />
          <Route path="/greenhouse" element={<GreenhousePage />} />
          {/* Add a catch-all or 404 page if needed */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
