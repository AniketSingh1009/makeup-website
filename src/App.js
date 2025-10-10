import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handlePortfolioToggle = () => {
    setShowPortfolio(!showPortfolio);
  };

  if (showPortfolio) {
    return (
      <ThemeProvider>
        <div className="App bg-white dark:bg-neutral-900 transition-colors duration-300">
          <Navbar onPortfolioClick={handlePortfolioToggle} />
          <Portfolio onClose={handlePortfolioToggle} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-neutral-900 transition-colors duration-300">
        <Navbar onPortfolioClick={handlePortfolioToggle} />
        <Hero onViewPortfolio={handlePortfolioToggle} />
        <About onViewPortfolio={handlePortfolioToggle} />
        <Services onViewPortfolio={handlePortfolioToggle} />
        <Testimonials onViewPortfolio={handlePortfolioToggle} />
        <Products />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
