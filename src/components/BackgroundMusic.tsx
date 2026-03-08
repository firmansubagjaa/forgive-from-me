import * as react from 'react';
import { motion, AnimatePresence } from 'motion/react';
import audioFile from "../assets/sfx/background_music.mp3";

interface BackgroundMusicProps {
    isOpened: boolean;
}

const BackgroundMusic = ({ isOpened }: BackgroundMusicProps) => {
    const [isMuted, setIsMuted] = react.useState(false);
    const audioRef = react.useRef<HTMLAudioElement>(null);

    react.useEffect(() => {
        if (isOpened && audioRef.current) {
            audioRef.current.volume = 0; // Mulai dari 0 untuk fade-in
            audioRef.current.play().catch(err => console.log("Audio autoplay prevented", err));

            // Efek Fade-in Musik
            let vol = 0;
            const fadeIn = setInterval(() => {
                if (audioRef.current) {
                    if (vol < 0.4) {
                        vol += 0.05;
                        audioRef.current.volume = Math.min(vol, 1);
                    } else {
                        clearInterval(fadeIn);
                    }
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);

            return () => clearInterval(fadeIn);
        }
    }, [isOpened]);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <audio ref={audioRef} loop src={audioFile} />

            {/* Mute/Unmute Button (Visible after opening) */}
            <AnimatePresence>
                {isOpened && (
                    <motion.button
                        aria-label={isMuted ? "Bunyikan musik latar" : "Matikan musik latar"}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="fixed top-6 right-6 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-400"
                        onClick={toggleMute}
                    >
                        {isMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.69a.75.75 0 01-1.28.53l-4.72-4.72H4.518c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.518 8.25h2.25z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.531V19.69a.75.75 0 01-1.28.53l-4.72-4.72H4.518c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.518 8.25h2.25z" />
                            </svg>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default BackgroundMusic;
