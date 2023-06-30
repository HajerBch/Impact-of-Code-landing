import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
  const helmetContext = {};
  return (
    <ParallaxProvider>
    <HelmetProvider context={helmetContext}>
      <div className="App bg-black overflow-x-hidden">
        <Helmet>
          <title>Impact of Code</title>
          <meta property="og:title" content="Impact of Code" />
          <meta property="og:description" content="Impact of code is a one-week-long dev event that consists of daily coding challenges wrapped up in a story scenario under the theme of an apocalyptic world (prequel to last year’s story) in which we follow the steps of a character as he solves his way to escape the end." />
          <meta name="description" content="Impact of code is a one-week-long dev event that consists of daily coding challenges wrapped up in a story scenario under the theme of an apocalyptic world (prequel to last year’s story) in which we follow the steps of a character as he solves his way to escape the end." />
          <meta property="og:image" content="https://www.dropbox.com/scl/fi/os0s4wurs2foe8oevyd6w/site-image.jpg?dl=0&rlkey=gtrpl017prp956gs0izcp3x9x" />
        </Helmet>
        <Navbar />
        <Hero />
        <TheEvent />
        <TheChallenge />
        <RulesAndConditions />
        <Recording />
        <Faq />
        <Footer />
      </div>
      </HelmetProvider>
    </ParallaxProvider>
  );
}

export default App;
