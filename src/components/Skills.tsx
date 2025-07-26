import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'TypeScript', level: 95, icon: '⚡' },
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '🚀' },
    { name: 'Vue.js', level: 80, icon: '💚' },
    { name: 'Express (Node.js)', level: 85, icon: '🟢' },
    { name: 'AWS', level: 75, icon: '☁️' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技術スキル
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            モダンなWeb技術に情熱を注いでおり、設計からリリースまで
            拡張性のあるソリューションを構築しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>習熟度</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
