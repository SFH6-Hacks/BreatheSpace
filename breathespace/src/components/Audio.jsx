import { useState, useRef, useEffect } from 'react';

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
  
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 30% volume
    }
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio ref={audioRef} loop>
        <source src="/Ambience1-pixabay.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleAudio}
        className="w-12 h-12 bg-base border rounded-full
                    flex items-center justify-center
                    hover:scale-110 shadow-lg"
        aria-label="Toggle ambient audio"
      >
        <span className="text-2xl">
          {isPlaying ? '🔊' : '🔇'}
        </span>
      </button>
    </div>
  );
}