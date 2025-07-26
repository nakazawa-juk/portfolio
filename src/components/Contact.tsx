import React from 'react';
import { Mail, ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-50 to-cream-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            一緒に働きませんか
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            あなたの次のプロジェクトでのコラボレーションに興味がありますか？
            新しい機会や革新的なアイデアについて話し合うことを常に歓迎しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Wantedly</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Wantedlyで私とつながり、専門的な経歴について詳しく知り、
              潜在的な機会について話し合いましょう。
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              プロフィールを見る
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 mb-6">
              直接的なコミュニケーションをお好みですか？メールをお送りいただければ、
              できるだけ早くお返事いたします。
            </p>
            <a
              href="mailto:jukiya.nakazawa@example.com"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
            >
              メール送信
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            求めている案件
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-2">🚀</div>
              <p className="text-sm font-medium text-gray-800">
                ゼロイチ開発
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-2">💡</div>
              <p className="text-sm font-medium text-gray-800">
                スタートアップ
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm font-medium text-gray-800">
                最新技術
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm font-medium text-gray-800">
                効率的な開発
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
