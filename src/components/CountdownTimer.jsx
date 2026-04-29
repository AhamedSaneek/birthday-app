import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
        <div className="glass-panel w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold text-[#d81b60]">
          {timeLeft[interval]}
        </div>
        <span className="text-xs md:text-sm uppercase tracking-widest mt-2 font-semibold text-[#880e4f]">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <section className="py-20 relative z-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl mb-8" style={{ fontFamily: 'var(--font-accent)', color: '#880e4f' }}>
          Counting down to your special day...
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-y-4">
          {timerComponents.length ? timerComponents : <span className="text-3xl text-[#d81b60] font-bold">It's time! Happy Birthday! 🎉</span>}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
