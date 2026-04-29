import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Attempt autoplay on mount (often blocked by browsers until interaction)
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked. User needs to interact first.");
      }
    };
    playAudio();
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Placeholder Audio */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={togglePlay}
        className="glass-panel p-3 rounded-full flex items-center justify-center text-pink-600 hover:text-pink-800 transition-colors bg-white/60 hover:bg-white/80"
        style={{ width: '50px', height: '50px' }}
      >
        {isPlaying ? <Volume2 size={24} color="#d81b60" /> : <VolumeX size={24} color="#d81b60" />}
      </button>
    </div>
  );
};

export default AudioPlayer;
