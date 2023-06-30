import React from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <title>Impact of Code</title>
          <meta property="og:title" content="Impact of Code" />
          <meta property="og:description" content="Impact of code is a one-week-long dev event that consists of daily coding challenges wrapped up in a story scenario under the theme of an apocalyptic world (prequel to last year’s story) in which we follow the steps of a character as he solves his way to escape the end." />
          <meta property="og:image" content="https://ucf0f990d87aeebe555400a66dd4.previews.dropboxusercontent.com/p/thumb/AB9SxHCwsRmgQAmEVqNwXDFwnkRZ00Ymj_dSMIvhFXuBwrmBbwcB-F7xWK9CSC6lAKyPUUgmtPnY_R5lgw3P12d-z4ILKvSuWJRtCKbKGWbbhFllqmQtt4B0MADAKiHKILbGjOlllf8ODWIOdSxVk5OCA6P2cEEXx2NK333cvXQjjcJ1pXWs5f8vfLaksf31KeynE1m9nR4A6aeYkmrhDestGRc9CrvxL2iHrR_42cdfhpflZbbLFE_8o5ewieu24ZLndGIQJkWVf5q76AebBYLan5eq9NauWiqANBfUetGdq0DaVFR4LA3TDychcnMizi8LZt0PL2zGCYGuTJWr0qfWqSK3GTwMuh4ewdoLm5SoH8UfhAN6hNkp3bD4YNrKUhE/p.jpeg" />
          
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
    </ParallaxProvider>
  );
}

export default App;
