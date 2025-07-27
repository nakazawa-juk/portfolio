import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Works = () => {
  const projects = [
    {
      title: 'スイーツ販売ECサイト',
      description:
        '自社製造のスイーツを販売するモバイル向けECサイト。モバイルファーストのユーザビリティを重視し、決済処理やマイページ機能など包括的なEC機能を実装。セキュアな決済システムとレスポンシブデザインで開発。',
      technologies: ['Next.js', 'React', 'TypeScript', 'Drizzle', 'AWS', 'Vercel', 'MySQL', 'Pay.JP'],
      image:
        'https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: null,
      codeUrl: null,
    },
    {
      title: '税理士紹介営業自動化システム',
      description:
        '税理士紹介サービスの営業プロセスを自動化するシステム。GraphQLを活用したモダンなアーキテクチャで、顧客管理から紹介マッチング、営業フロー管理まで包括的に対応。スクラム開発でビジネス現場との密接な連携を実現。',
      technologies: ['React', 'Next.js', 'GraphQL', 'Prisma', 'AWS', 'Docker', 'Jest', 'GitHub Actions'],
      image:
        'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: null,
      codeUrl: null,
    },
    {
      title: '家計管理Webアプリ',
      description:
        '複数人で共有できる家計管理アプリケーション。企画から要件定義、設計、開発、テスト、リリースまで全工程を一人で担当。AWSクラウドサービスを活用した堅牢なインフラ設計とCI/CD自動化を実装した個人開発プロジェクト。',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS', 'Lambda', 'API Gateway', 'S3', 'CloudFront', 'Jest', 'Cypress', 'GitHub Actions'],
      image:
        'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            モダンなWebアプリケーションやSaaSソリューション構築の経験を紹介するプロジェクトを厳選しました。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="aspect-video bg-gray-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
