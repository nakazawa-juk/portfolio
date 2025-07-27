import React from 'react';
import { Calendar, Users, Code, Zap } from 'lucide-react';

const Strengths = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'フルスタック開発',
      description:
        '要件分析からデプロイまでのエンドツーエンド開発',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'チーム協働',
      description:
        '大規模企業からスタートアップまで様々な環境での豊富な経験',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: '高速開発',
      description:
        '生成AIを活用した迅速なプロトタイピングと開発',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: '信頼性の高い開発',
      description: '細部への配慮と丁寧な実装で、バグの少ない安定したシステムを構築',
    },
  ];

  return (
    <section id="strengths" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            主な強み
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            技術力とチームワークを活かした
            高品質なシステム開発を実現します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                {highlight.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;