import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import local images so Vite resolves their build paths
import portfolioBg from "../assets/why nova section 2 or 3.png";
import heroBg from "../assets/hero bg 3.png";
import siteBg from "../assets/website_bg.png";
import heroUi from "../assets/hero section ui.png";
import bgLogo from "../assets/bg.png";

const IMAGES_TO_PRELOAD = [portfolioBg, heroBg, siteBg, heroUi, bgLogo];
const WORDS = ["Academics", "Intelligence", "Growth"];

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  const loadedCountRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  // Keep refs up to date to prevent stale closures
  useEffect(() => {
    loadedCountRef.current = loadedCount;
  }, [loadedCount]);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // 1. Preload images
  useEffect(() => {
    let currentLoaded = 0;
    const totalImages = IMAGES_TO_PRELOAD.length;

    if (totalImages === 0) {
      return;
    }

    const checkCompletion = () => {
      currentLoaded++;
      setLoadedCount(currentLoaded);
    };

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkCompletion;
      img.onerror = checkCompletion; // Prevent hanging on load failure
    });
  }, []);

  // 2. Rotating words (every 900ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev < WORDS.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  // 3. Counter (0 to 100 in 2.7s using requestAnimationFrame)
  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;
    const duration = 2700; // 2.7 seconds
    const totalImages = IMAGES_TO_PRELOAD.length;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;

      // Calculate progress based on time elapsed
      const timeProgress = (elapsed / duration) * 100;

      // Calculate progress cap based on loaded image count to avoid "99% freeze frustration":
      // 0 loaded -> max 20%
      // 1 loaded -> max 40%
      // 2 loaded -> max 60%
      // 3 loaded -> max 80%
      // 4 loaded -> max 100%
      const maxAllowed = totalImages === 0
        ? 100
        : 20 + (loadedCountRef.current / totalImages) * 80;

      let nextProgress = Math.min(timeProgress, maxAllowed);

      if (nextProgress >= 100) {
        nextProgress = 100;
      }

      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(step);
      } else {
        // Show our logo reveal first
        setShowReveal(true);
        const timer = setTimeout(() => {
          onCompleteRef.current();
        }, 2200);
        return () => clearTimeout(timer);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <motion.div
      className="loading-screen fixed inset-0 z-[9999] bg-bg select-none overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <AnimatePresence mode="wait">
        {!showReveal ? (
          <motion.div
            key="loading-state"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Element 1: "Studiqs" Label (Top-Left) */}
            <motion.div
              className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-muted uppercase tracking-[0.3em] font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Studiqs
            </motion.div>

            {/* Element 2: Rotating Words (Center) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80 font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Element 3: Counter (Bottom-Right) */}
            <motion.div
              className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {Math.round(progress).toString().padStart(3, "0")}
            </motion.div>

            {/* Element 4: Progress Bar (Bottom Edge) */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
              <motion.div
                className="h-full origin-left"
                style={{
                  background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                  boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
                  width: "100%",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="reveal-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-bg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-6"
            >
              <motion.img 
                src={bgLogo} 
                alt="Studiqs Logo" 
                className="w-40 md:w-52 h-auto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
