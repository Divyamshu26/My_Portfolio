import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme';

const CloudSvg = ({ className = '' }) => (
    <svg
        viewBox="0 0 40 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M10 21h21a7 7 0 0 0 1.4-13.86A9 9 0 0 0 15.2 4.6 6.5 6.5 0 0 0 6.1 10.1 5.5 5.5 0 0 0 10 21Z" />
    </svg>
);

const ForestSvg = () => (
    <svg
        viewBox="0 0 90 30"
        className="w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        {/* Layered pine trees silhouette matching the night toggle */}
        <polygon points="10,30 16,10 22,30" fill="#091029" />
        <rect x="15.2" y="27" width="1.6" height="3" fill="#060b1d" />

        <polygon points="18,30 25,6 32,30" fill="#0b1330" />
        <rect x="24.2" y="27" width="1.6" height="3" fill="#060b1d" />

        <polygon points="27,30 33,12 39,30" fill="#080e24" />
        <rect x="32.2" y="27" width="1.6" height="3" fill="#060b1d" />

        <polygon points="35,30 42,7 49,30" fill="#0b1330" />
        <rect x="41.2" y="27" width="1.6" height="3" fill="#060b1d" />

        <polygon points="44,30 50,12 56,30" fill="#091029" />
        <rect x="49.2" y="27" width="1.6" height="3" fill="#060b1d" />

        <polygon points="51,30 58,5 65,30" fill="#0b1330" />
        <rect x="57.2" y="27" width="1.6" height="3" fill="#060b1d" />

        <polygon points="58,30 63,13 68,30" fill="#080e24" />
    </svg>
);

const STARS = [
    { top: '22%', left: '13%', size: 2 },
    { top: '34%', left: '22%', size: 1.5 },
    { top: '18%', left: '31%', size: 2 },
    { top: '28%', left: '38%', size: 1.5 },
    { top: '14%', left: '47%', size: 2 },
    { top: '36%', left: '53%', size: 1.5 },
    { top: '19%', left: '61%', size: 2 },
];

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`relative w-[78px] h-[38px] rounded-full overflow-hidden cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-500 border ${
                isDark
                    ? 'border-[#2b3c6e] shadow-[inset_0_2px_6px_rgba(0,0,0,0.55),0_2px_10px_rgba(15,23,42,0.4)]'
                    : 'border-[#72c3f8] shadow-[inset_0_2px_6px_rgba(14,116,184,0.22),0_2px_10px_rgba(56,189,248,0.25)]'
            }`}
            style={{
                background: isDark
                    ? 'linear-gradient(180deg, #0b1430 0%, #172652 55%, #23376d 100%)'
                    : 'linear-gradient(180deg, #58b6fa 0%, #8cd3ff 55%, #b6e6ff 100%)',
            }}
        >
            {/* Stars (Dark Mode) */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isDark ? 1 : 0,
                    y: isDark ? 0 : -6,
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 pointer-events-none"
            >
                {STARS.map((star, idx) => (
                    <motion.span
                        key={idx}
                        animate={
                            isDark
                                ? { opacity: [0.45, 1, 0.45], scale: [0.9, 1.15, 0.9] }
                                : { opacity: 0 }
                        }
                        transition={{
                            duration: 2.2 + (idx % 3) * 0.6,
                            repeat: Infinity,
                            delay: idx * 0.2,
                            ease: 'easeInOut',
                        }}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Pine Forest Silhouette (Dark Mode - rises from bottom) */}
            <motion.div
                initial={false}
                animate={{
                    y: isDark ? 0 : 26,
                    opacity: isDark ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 22,
                }}
                className="absolute bottom-0 left-0 w-[64px] h-[25px] pointer-events-none z-10"
            >
                <ForestSvg />
            </motion.div>

            {/* Clouds (Light Mode - glide out to the right when switching to dark) */}
            <motion.div
                initial={false}
                animate={{
                    x: isDark ? 38 : 0,
                    opacity: isDark ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 210,
                    damping: 22,
                }}
                className="absolute inset-0 pointer-events-none z-20"
            >
                {/* Top-center cloud */}
                <CloudSvg className="absolute top-[3px] left-[29px] w-[19px] h-[12px] text-white drop-shadow-[0_1px_2px_rgba(56,189,248,0.3)]" />
                {/* Bottom-center cloud */}
                <CloudSvg className="absolute bottom-[2px] left-[22px] w-[24px] h-[15px] text-white drop-shadow-[0_1px_2px_rgba(56,189,248,0.35)]" />
                {/* Right cloud */}
                <CloudSvg className="absolute top-[10px] right-[4px] w-[24px] h-[15px] text-white/95 drop-shadow-[0_1px_2px_rgba(56,189,248,0.3)]" />
            </motion.div>

            {/* Sun / Moon Orb */}
            <motion.div
                initial={false}
                animate={{
                    x: isDark ? 40 : 0,
                    rotate: isDark ? -12 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 22,
                }}
                className="absolute top-[5px] left-[5px] w-[26px] h-[26px] rounded-full pointer-events-none z-10"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle at 35% 35%, #faf7dc 0%, #f1ecc3 65%, #e3dcb0 100%)'
                        : 'radial-gradient(circle at 35% 35%, #ffe66d 0%, #ffc436 60%, #f59e0b 100%)',
                    boxShadow: isDark
                        ? 'inset -4px -1px 0 0 rgba(175, 168, 128, 0.55), 0 0 12px rgba(245, 241, 204, 0.45)'
                        : '0 0 12px rgba(255, 196, 54, 0.8)',
                }}
            />
        </button>
    );
};

export default ThemeToggle;
