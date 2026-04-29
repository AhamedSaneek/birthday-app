import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

const Proposal = () => {
  const [stage, setStage] = useState('question'); // start directly at question

  const fireConfetti = useCallback(() => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ff4081', '#fce4ec', '#f8bbd0']
      }));
    }, 250);
  }, []);

  const handleYes = () => {
    setStage('accepted');
    fireConfetti();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#1a0011] to-[#3a0022] overflow-hidden">
      {/* Dark overlay for dramatic effect */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Floating particles background for extra beauty */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-500/20"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4 w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {stage === 'question' && (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
              className="glass-panel p-10 md:p-20 border border-[#ff4081]/40 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(255,64,129,0.15)] rounded-3xl"
            >
              <h2 className="text-4xl md:text-7xl text-white mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ fontFamily: 'var(--font-accent)' }}>
                Will you stay with me forever? ❤️
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                {/* Beautiful Button 1 */}
                <button 
                  onClick={handleYes}
                  className="relative group px-12 py-5 font-bold text-white rounded-full w-full sm:w-auto text-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff4081] to-[#f50057] transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
                  <span className="relative drop-shadow-md z-10">YES</span>
                  <div className="absolute inset-0 border border-white/20 rounded-full" />
                </button>
                
                {/* Beautiful Button 2 */}
                <button 
                  onClick={handleYes}
                  className="relative group px-12 py-5 font-bold text-[#ff4081] rounded-full w-full sm:w-auto text-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-[#ff4081]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
                  <span className="relative z-10">FOREVER YES</span>
                </button>
              </div>
            </motion.div>
          )}

          {stage === 'accepted' && (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-6xl md:text-8xl text-white mb-6 drop-shadow-[0_0_25px_rgba(255,64,129,0.8)]" style={{ fontFamily: 'var(--font-accent)' }}>
                I Love You.
              </h2>
              <p className="text-2xl md:text-3xl text-pink-200 mb-12 font-light">
                Forever and always.
              </p>
              <Link 
                to="/" 
                className="text-pink-300 hover:text-white underline decoration-pink-500/50 underline-offset-8 transition-colors duration-300"
              >
                Go back to our story
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Proposal;
