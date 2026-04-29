import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-center px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fce4ec] z-10" />
        {/* Placeholder image from user's request context */}
        <img 
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Romantic Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="z-20 glass-panel p-8 md:p-12 max-w-3xl w-full flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-4 text-gradient font-bold leading-tight"
          style={{ fontFamily: 'var(--font-accent)' }}
        >
          Happy Birthday My Love ❤️
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="text-lg md:text-xl lg:text-2xl text-[#880e4f] mt-4 max-w-xl mx-auto"
        >
          This is not just a birthday… it’s a celebration of you, my world.
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-10 z-20 text-[#d81b60]"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm uppercase tracking-widest font-semibold opacity-70">Scroll Down</span>
        <div className="w-[1px] h-12 bg-[#d81b60] mx-auto mt-2 opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;
