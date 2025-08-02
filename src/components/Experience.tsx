import React from 'react';

const Experience = () => {
  const companies = [
    { name: 'Junior Developer', role: '社内エンジニア', period: '2021 - 2022' },
    {
      name: 'Full-Stack Developer',
      role: 'フリーランスエンジニア',
      period: '2022 - 現在',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            経歴
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            多様な開発環境での実績を持つ、 若いながらも経験豊富な開発者です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              プロフィール
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  中澤 樹希也（なかざわ じゅきや）
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  2000年生まれ。
                  <br />
                  8歳から野球を始める。中高一貫校へ進学し甲子園出場。
                  <br />
                  TV等メディア出演を多数経験。
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  野球引退後、栄養学やスポーツ生理学を学術論文等から独学し、ブログ執筆・YouTube配信を開始。パーソナルトレーナー活動のためのHP制作を通じてITリテラシーを養う。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  システム開発に興味を持ち、プログラミングを独学。インターン・社内SEを経て、2022年に独立。これまで10以上のプロジェクトでシステム開発を経験。
                </p>
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">キャリア</h3>
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
