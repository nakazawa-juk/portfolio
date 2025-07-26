import React from 'react';
import { Calendar, Users, Code, Zap } from 'lucide-react';

const Experience = () => {
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

  const companies = [
    {
      name: 'Startup A',
      role: 'Senior Frontend Developer',
      period: '2023 - Present',
    },
    { name: 'Tech Corp', role: 'Full-Stack Developer', period: '2022 - 2023' },
    { name: 'Innovation Lab', role: 'Web Developer', period: '2021 - 2022' },
    { name: 'Digital Agency', role: 'Junior Developer', period: '2020 - 2021' },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            経歴
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            多様な開発環境での実績を持つ、
            若いながらも経験豊富な開発者です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              主な強み
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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

          {/* Career Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              キャリア
            </h3>
            <div className="space-y-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-orange-200 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {company.role}
                    </h4>
                    <p className="text-orange-600 font-medium">
                      {company.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {company.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
