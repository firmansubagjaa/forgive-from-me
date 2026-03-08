import { motion } from 'motion/react';

interface EnvelopeProps {
    onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
    return (
        <motion.button
            key="envelope"
            aria-label="Buka surat untuk Lala"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.8, ease: "backIn" }}
            onClick={onOpen}
            className="group relative cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-rose-400 rounded-3xl"
        >
            <div className="bg-white border-2 border-rose-50 shadow-2xl p-8 sm:p-12 w-[90%] max-w-sm md:max-w-[450px] h-56 md:h-72 rounded-3xl flex flex-col items-center justify-center text-center">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-5xl mb-4">✉️</motion.div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Untuk Lala ✨</h1>
                <p className="text-slate-300 text-xs mt-3 font-sans uppercase tracking-[0.2em]">Klik untuk membuka</p>
            </div>
        </motion.button>
    );
};

export default Envelope;
