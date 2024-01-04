import React from 'react';
import '../../App.scss';
// import Cards from '../carditem/Cards';
 import HeroSection from '../section/HeroSection';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
