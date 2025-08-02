import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Strengths from '../components/Strengths';
import Works from '../components/Works';
import Contact from '../components/Contact';

export default function Home() {
  // PostToolUse設定確認用の一時的なコメント
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Strengths />
        <Works />
        <Contact />
      </main>
    </div>
  );
}
