import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Works = () => {
  const projects = [
    {
      title: 'ECサイト・SaaSプラットフォーム',
      description:
        'Next.jsとAWSで構築されたフルスタックEC事業プラットフォーム。在庫管理、決済処理、分析ダッシュボードなどの機能を実装。',
      technologies: ['Next.js', 'TypeScript', 'AWS', 'Stripe'],
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: null,
      codeUrl: null,
    },
    {
      title: 'リアルタイムチャットアプリケーション',
      description:
        'ReactフロントエンドとExpressバックエンドによるWebSocketベースのチャットアプリ。複数ルーム、ファイル共有、ユーザー認証に対応。',
      technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
      image:
        'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: null,
      codeUrl: null,
    },
    {
      title: 'タスク管理ダッシュボード',
      description:
        'Vue.jsで構築された包括的なプロジェクト管理ツール。カンバンボード、時間追跡、チーム連携ツールなどを搭載。',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: null,
      codeUrl: null,
    },
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            主な実績
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            モダンなWebアプリケーションやSaaSソリューション構築の
            経験を紹介するプロジェクトを厳選しました。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      デモ
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github size={16} />
                      コード
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
