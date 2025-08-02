'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 25 : 50; // モバイルでは半分に削減
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 3, // サイズを3-9pxに拡大
          animationDelay: Math.random() * 20,
          animationDuration: Math.random() * 15 + 15, // 少し速く
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    // レスポンシブ対応のためリサイズ時に再生成
    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #fff7ed 0%, #ffedd5 25%, #fed7aa 50%, #fdba74 75%, #fb923c 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'linear-gradient(45deg, #fb923c, #f97316)',
              boxShadow: '0 0 10px rgba(251, 146, 60, 0.3)',
              animationName: 'float, fade',
              animationDuration: `${particle.animationDuration}s, 8s`,
              animationTimingFunction: 'ease-in-out, ease-in-out',
              animationIterationCount: 'infinite, infinite',
              animationDirection: 'normal, alternate',
              animationDelay: `${particle.animationDelay}s, ${particle.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 md:w-32 h-16 md:h-32 border-2 border-orange-400 rounded-full opacity-60 animate-spin-slow shadow-lg" />
        <div className="absolute bottom-1/4 right-1/4 w-12 md:w-24 h-12 md:h-24 border-2 border-orange-500 rounded-full opacity-50 animate-pulse shadow-md" />
        <div className="absolute top-1/2 right-1/3 w-8 md:w-16 h-8 md:h-16 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full opacity-50 animate-bounce-slow shadow-lg" />
        <div className="absolute top-3/4 left-1/3 w-6 md:w-12 h-20 md:h-40 bg-gradient-to-b from-orange-200 to-transparent opacity-40 animate-pulse transform rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-6 md:w-12 h-20 md:h-40 bg-gradient-to-b from-orange-300 to-transparent opacity-40 animate-bounce-slow transform -rotate-12" />
      </div>

      {/* Wave Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30">
          <div
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(254, 215, 170, 0.4) 0%, transparent 50%)
              `,
              animation: 'gradientShift 20s ease infinite',
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                IT技術で社会に貢献し、世の中に笑顔を増やしたい
              </h1>
              <div className="text-lg text-orange-600 font-medium italic">
                変化する社会のニーズに応えるため、
                新しい技術を学び、柔軟な開発を心がけています。
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              お問い合わせ
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <Image
                  src="/profile-hero.jpg"
                  alt="Jukiya Nakazawa プロフィール写真"
                  width={288}
                  height={288}
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                👋
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
