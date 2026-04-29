import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import LoveNotes from '../components/LoveNotes';
import BirthdayMessage from '../components/BirthdayMessage';
import CountdownTimer from '../components/CountdownTimer';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <CountdownTimer targetDate="2026-04-30T00:00:00" />
      <Timeline />
      <Gallery />
      <LoveNotes />
      <BirthdayMessage />
      
      {/* Link to the Surprise Page */}
      <section className="py-24 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl mb-8 text-[#880e4f]" style={{ fontFamily: 'var(--font-accent)' }}>
          There is one more thing...
        </h2>
        
        <Link 
          to="/surprise"
          className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden text-2xl font-semibold text-white bg-[#ff4081] rounded-full group shadow-[0_0_20px_rgba(255,64,129,0.5)] hover:shadow-[0_0_40px_rgba(255,64,129,0.8)] transition-all duration-500 ease-out"
        >
          <span className="relative z-10">Click for a Surprise</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
