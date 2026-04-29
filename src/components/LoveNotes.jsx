import { motion } from 'framer-motion';

const notes = [
  {
    id: 1,
    text: "Your smile is the brightest part of my day. I could look at it forever."
  },
  {
    id: 2,
    text: "I didn't know what true happiness was until I found you. You complete me in every way."
  },
  {
    id: 3,
    text: "Thank you for being my rock, my safe place, and my best friend."
  },
  {
    id: 4,
    text: "I love the way you laugh, the way you care, and the way you make me a better person."
  }
];

const LoveNotes = () => {
  return (
    <section className="section-container relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-[#880e4f] mb-4">Reasons I Love You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {notes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            className="glass-panel p-8 relative overflow-hidden group"
          >
            {/* Decorative quote marks */}
            <div className="absolute top-2 left-4 text-6xl text-pink-300/30 font-serif leading-none">"</div>
            
            <p className="text-xl md:text-2xl text-center leading-relaxed text-[#5c1c4f] relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
              {note.text}
            </p>
            
            <div className="absolute bottom-2 right-4 text-6xl text-pink-300/30 font-serif leading-none rotate-180">"</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveNotes;
