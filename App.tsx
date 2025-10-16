
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeMessage from './components/WelcomeMessage';
import NewsAndEvents from './components/NewsAndEvents';
import KeyFeatures from './components/KeyFeatures';
import Faculties from './components/Faculties';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Colleges from './components/Colleges';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <WelcomeMessage />
        <NewsAndEvents />
        <KeyFeatures />
        <Faculties />
        <Stats />
        <Gallery />
        <Colleges />
      </main>
      <Footer />
    </div>
  );
};

export default App;
