import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((currentHearts) => {
        // Keep maximum of 25 hearts to prevent lag
        if (currentHearts.length > 25) {
          return currentHearts.slice(1);
        }
        return [
          ...currentHearts,
          {
            id: Math.random(),
            left: Math.random() * 100, // random x position
            duration: Math.random() * 5 + 5, // random duration between 5s and 10s
            size: Math.random() * 15 + 10, // random size between 10px and 25px
          },
        ];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0, scale: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.8, 0.8, 0],
            scale: [0, 1, 1, 0.5],
            x: Math.sin(heart.id) * 50 // gentle sway
          }}
          transition={{ 
            duration: heart.duration,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            color: 'rgba(255, 105, 135, 0.6)'
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
