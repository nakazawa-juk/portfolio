import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-4xl">👋</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm Jukiya.
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                I am a Web Developer & SaaS Engineer based in Tokyo, Japan.
              </p>
              <div className="text-lg text-orange-600 font-medium italic">
                "Driven by curiosity, grounded in care."
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-medium">
                  Profile Photo
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;