import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Themer from '../components/Themer';

export default function Index() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Themer />
    </>
  );
}
