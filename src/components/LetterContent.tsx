import { motion, AnimatePresence } from 'motion/react';

export interface PageContent {
    title: string;
    text: string;
    sub: string;
    img: string;
    alt: string;
    color: string;
}

interface LetterContentProps {
    pages: PageContent[];
    step: number;
    onNext: () => void;
    onPrev: () => void;
    onFinish: () => void;
}

const LetterContent = ({ pages, step, onNext, onPrev, onFinish }: LetterContentProps) => {
    return (
        <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl mx-auto bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 min-h-[85vh] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between"
        >
            {/* Progress Bar */}
            <div
                role="progressbar"
                aria-valuenow={step + 1}
                aria-valuemin={1}
                aria-valuemax={pages.length}
                aria-label={`Halaman ${step + 1} dari ${pages.length}`}
                className="flex gap-1.5 justify-center mb-10"
            >
                {pages.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step === i ? 'w-10 bg-rose-500 shadow-sm shadow-rose-200' : 'w-2 bg-slate-300/80'}`} />
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 flex flex-col items-center text-center justify-center py-4"
                    aria-live="polite"
                >
                    <img src={pages[step].img} alt={pages[step].alt} className="h-28 sm:h-32 md:h-40 object-contain mb-6 md:mb-8 drop-shadow-md" />
                    <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400 font-sans font-black mb-3 md:mb-4">{pages[step].title}</h2>
                    <p className={`text-xl sm:text-2xl md:text-3xl font-medium italic mb-4 md:mb-6 leading-tight max-w-[90%] ${pages[step].color}`}>"{pages[step].text}"</p>
                    <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-sans">{pages[step].sub}</p>
                </motion.div>
            </AnimatePresence>

            {/* Tombol Navigasi */}
            <div className="flex items-center justify-between mt-6 md:mt-12 pt-6 border-t border-slate-50 font-sans">
                <button
                    onClick={onPrev}
                    className={`text-slate-400 hover:text-slate-600 transition-opacity text-sm sm:text-base ${step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    ← Kembali
                </button>

                <button
                    onClick={() => step < pages.length - 1 ? onNext() : onFinish()}
                    className="bg-slate-900 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:bg-rose-500 transition-all active:scale-95"
                >
                    {step < pages.length - 1 ? "Lanjut" : "A Promise ❤️"}
                </button>
            </div>
        </motion.div>
    );
};

export default LetterContent;
