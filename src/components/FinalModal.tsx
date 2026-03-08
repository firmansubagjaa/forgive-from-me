import { motion, AnimatePresence } from 'motion/react';

interface FinalModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
}

const FinalModal = ({ isOpen, onClose, onAccept }: FinalModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 shadow-2xl w-[95%] max-w-sm relative z-10 text-center space-y-6 md:space-y-8"
                    >
                        <div className="text-5xl md:text-6xl" aria-hidden="true">🌹</div>
                        <div className="space-y-2 md:space-y-3">
                            <h3 id="modal-title" className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">Baikan Kembali?</h3>
                            <p className="text-slate-500 font-sans leading-relaxed text-sm md:text-base">Aku benar-benar minta maaf. Mari kita mulai dari awal lagi, Lala.</p>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 font-sans">
                            <button onClick={onAccept} className="bg-rose-500 text-white py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl shadow-rose-100 hover:bg-rose-600 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300">I Forgive You ❤️</button>
                            <button onClick={onClose} className="text-slate-400 text-xs md:text-sm focus-visible:outline-none focus-visible:underline">Belum Siap...</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FinalModal;
