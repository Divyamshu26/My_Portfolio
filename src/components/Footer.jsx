import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white/80 dark:bg-[#0a0a0d]/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
                    © 2025 Giyyar Divyamshu Raghavendra. All Rights Reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Divyamshu26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/divyamshu-raghavendra-giyyar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
