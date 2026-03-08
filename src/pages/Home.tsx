import * as react from 'react';
import { AnimatePresence } from 'motion/react';
import Envelope from '../components/Envelope';
import LetterContent from '../components/LetterContent';
import FinalModal from '../components/FinalModal';
import BackgroundMusic from '../components/BackgroundMusic';
import pages from '../data/PageContent';
import images from '../data/images';

const Home = () => {
    const [step, setStep] = react.useState(0);
    const [isOpened, setIsOpened] = react.useState(false);
    const [isModalOpen, setIsModalOpen] = react.useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-serif overflow-hidden relative text-white">
            <BackgroundMusic isOpened={isOpened} />

            {/* Decorative Background Image */}
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${images.background})` }}
            >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
            </div>

            <AnimatePresence mode="wait">
                {!isOpened ? (
                    <Envelope onOpen={() => setIsOpened(true)} />
                ) : (
                    <LetterContent
                        pages={pages}
                        step={step}
                        onNext={() => setStep(s => s + 1)}
                        onPrev={() => setStep(s => s - 1)}
                        onFinish={() => setIsModalOpen(true)}
                    />
                )}
            </AnimatePresence>

            <FinalModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAccept={() => alert("Yeay! Makasih Lala ❤️")}
            />
        </div>
    );
};

export default Home;