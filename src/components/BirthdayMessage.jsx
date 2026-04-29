import { motion } from 'framer-motion';

const BirthdayMessage = () => {
  return (
    <section className="py-24 px-4 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Soft pink background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fce4ec] via-transparent to-[#fce4ec]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="glass-panel max-w-4xl mx-auto p-10 md:p-16 text-center z-10 shadow-2xl shadow-pink-200/50"
      >
        <h2 className="text-4xl md:text-6xl text-gradient mb-8" style={{ fontFamily: 'var(--font-accent)' }}>
          My Dearest...
        </h2>
        
        <p className="text-lg md:text-xl text-[#4a148c] leading-loose mb-6 font-medium">
          As you celebrate another year of life, I want you to know how incredibly special you are to me. You bring light into my darkest days and joy into every moment we share. 
        </p>
        <p className="text-lg md:text-xl text-[#4a148c] leading-loose font-medium">
          Watching you grow, love, and inspire those around you is my greatest privilege. I promise to stand by your side, to celebrate your victories, and to hold your hand through everything. Happy Birthday to the queen of my heart. Here's to a lifetime of beautiful moments together.
        </p>
      </motion.div>
    </section>
  );
};

export default BirthdayMessage;
