import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Analytic from './component/Analytic';
import Newsletter from './component/Newsletter';
import Cards from './component/Cards';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytic />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
