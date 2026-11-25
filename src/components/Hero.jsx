import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Section from './ui/Section';

const Hero = () => {
    return (
        <Section id="home" className="flex items-start justify-center !pt-12 md:!pt-16 !pb-12">
            {/* Background Blobs */}
            <div className="absolute top-0 left-[-1%] w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/15 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 dark:bg-indigo-600/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-400/30 dark:bg-purple-600/15 rounded-full blur-[100px]" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 mb-4 pb-2">
                            Giyyar Divyamshu Raghavendra
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-slate-800 md:text-slate-600 dark:text-slate-200 dark:md:text-slate-300 font-medium mb-6">
                            Software Developer | AI/ML | Backend
                        </h2>
                        <p className="text-lg text-slate-700 md:text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                            Computer Science Engineering graduate passionate about building real-world applications in AI, ML, backend systems, and scalable full-stack development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="/SDE%20ALL.pdf"
                            download
                            className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            Resume <Download size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/50 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-full font-medium hover:bg-white/80 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            Contact <Mail size={18} />
                        </a>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Glass Card Container */}
                        <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 dark:border-slate-700/50 shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500 flex items-center justify-center p-8">
                            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-green-100/90 dark:bg-emerald-950/80 border border-green-200 dark:border-emerald-700/60 text-green-700 dark:text-emerald-300 text-sm font-bold shadow-sm backdrop-blur-sm animate-bounce z-10">
                                Open to Work
                            </div>
                            <motion.img
                                src="/boy_coding.webp"
                                alt="Coding Illustration"
                                className="w-full h-full object-contain drop-shadow-2xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
