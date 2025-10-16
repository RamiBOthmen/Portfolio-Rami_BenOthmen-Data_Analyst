"use client";

import { useState, useEffect, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.3;

    // Try to autoplay on load
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch (error) {
        // Autoplay blocked - will start on user interaction
        setAutoplayBlocked(true);
        setIsPlaying(false);
      }
    };

    // Attempt autoplay after a short delay
    const timer = setTimeout(playAudio, 1000);

    return () => clearTimeout(timer);
  }, []);


  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setHasUserInteracted(true);

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  // Handle user interactions to start audio if blocked
  useEffect(() => {
    const handleUserInteraction = async () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
      }
      // Also try to start audio immediately on any interaction
      if (autoplayBlocked && !isPlaying) {
        const audio = audioRef.current;
        if (audio) {
          try {
            await audio.play();
            setIsPlaying(true);
            setAutoplayBlocked(false);
          } catch (error) {
            console.error("Error starting audio after user interaction:", error);
          }
        }
      }
    };

    // Add event listeners only for click interactions
    const events = ["click", "keydown", "touchstart"];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [hasUserInteracted, autoplayBlocked, isPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/sounds/Lofi_Study.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <button
        onClick={togglePlayPause}
        className={`fixed top-4 right-4 z-50 w-10 h-10 rounded-full backdrop-blur-sm border shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 flex items-center justify-center group ${
          autoplayBlocked && !isPlaying
            ? "bg-sky-50/90 dark:bg-sky-900/30 border-sky-200 dark:border-sky-700 animate-pulse"
            : "bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
        }`}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={autoplayBlocked && !isPlaying ? "Click to start music" : isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button>
    </>
  );
}
