import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;