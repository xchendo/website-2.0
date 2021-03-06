import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Website() {
  return (
    <div className="website">
      <>
        <Navbar />
        <Hero />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </div>
  );
}
if (document.getElementById('yeet')) {
  ReactDOM.render(<Website />, document.getElementById('yeet'));
}

export default Website;
