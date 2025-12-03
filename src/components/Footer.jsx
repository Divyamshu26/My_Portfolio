import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 text-sm text-center md:text-left">
                    © 2025 Giyyar Divyamshu Raghavendra. All Rights Reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Divyamshu26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/divyamshu-raghavendra-giyyar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
