import { motion } from 'framer-motion';
import { Heart, Star, CalendarHeart, Gift } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: "The Day We Met",
    date: "A beautiful day in the past",
    description: "The moment our eyes met, I knew my life was about to change forever. It was the start of our beautiful journey.",
    icon: <Star className="text-white" size={24} />
  },
  {
    id: 2,
    title: "Our First Date",
    date: "A magical evening",
    description: "Nervous smiles, endless conversations, and a feeling like I had known you my entire life.",
    icon: <Heart className="text-white" size={24} />
  },
  {
    id: 3,
    title: "Saying 'I Love You'",
    date: "A day to remember",
    description: "Three little words that meant the world. The day we finally admitted what our hearts already knew.",
    icon: <CalendarHeart className="text-white" size={24} />
  },
  {
    id: 4,
    title: "Today",
    date: "Celebrating You",
    description: "Every day with you is a gift, but today is extra special. Happy birthday to my soulmate.",
    icon: <Gift className="text-white" size={24} />
  }
];

const Timeline = () => {
  return (
    <section className="section-container relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-[#880e4f] mb-4">Our Beautiful Story</h2>
        <p className="text-lg text-pink-700 max-w-2xl mx-auto">Every moment with you is my favorite, but here are some that changed my life.</p>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 md:px-0">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-200 rounded-full" />

        {milestones.map((milestone, index) => (
          <motion.div 
            key={milestone.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-[27px] top-0 bottom-0 w-1 bg-pink-200 rounded-full" />

            {/* Empty space for alternating layout */}
            <div className="hidden md:block w-5/12" />

            {/* Icon Center */}
            <div className="z-10 bg-gradient-to-br from-[#ff4081] to-[#c2185b] rounded-full p-3 shadow-lg shadow-pink-300 self-start ml-2 md:ml-0 md:self-auto mb-4 md:mb-0">
              {milestone.icon}
            </div>

            {/* Content Card */}
            <div className="w-full pl-16 md:pl-0 md:w-5/12 glass-panel p-6 text-left hover:-translate-y-1 transition-transform duration-300">
              <span className="text-sm font-semibold text-[#c2185b] uppercase tracking-wider">{milestone.date}</span>
              <h3 className="text-2xl mt-1 mb-2 text-[#4a148c]">{milestone.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
