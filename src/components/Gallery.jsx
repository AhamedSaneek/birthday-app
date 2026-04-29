import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Holding hands" },
  { id: 2, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Romantic dinner" },
  { id: 3, src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Walking together" },
  { id: 4, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Rings/Jewelry" },
  { id: 5, src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Beach sunset" },
  { id: 6, src: "https://images.unsplash.com/photo-1623094892408-f14d0f6ed687?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Flowers" },
];

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl text-[#880e4f] mb-4">Captured Moments</h2>
        <p className="text-lg text-pink-700">A million memories, but here are a few of my favorites.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-8">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            layoutId={`photo-container-${photo.id}`}
            onClick={() => setSelectedId(photo.id)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-4 border-white/60 group aspect-square relative hover:shadow-[0_8px_30px_rgba(216,27,96,0.2)] transition-all duration-300"
          >
            <motion.img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedId(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              layoutId={`photo-container-${selectedId}`}
              className="max-w-4xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={photos.find(p => p.id === selectedId)?.src} 
                alt="Enlarged moment"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
