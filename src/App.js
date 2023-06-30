import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/hero';
import TheEvent from './sections/theEvent';
import TheChallenge from './sections/TheChallenge';
import RulesAndConditions from './sections/rulesAndConditions';
import Recording from './sections/recording';
import Faq from './sections/faq';
import Footer from './sections/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App bg-black overflow-x-hidden">
        <Navbar />
        <Hero />
        <TheEvent />
        <TheChallenge />
        <RulesAndConditions />
        <Recording />
        <Faq />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
