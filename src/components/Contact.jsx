import React, { useState } from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., mailto or API)
        window.location.href = `mailto:divyamshu.raghavendra@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Section id="contact" className="bg-white/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Get In Touch
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, opportunities, or just a friendly chat.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <a href="mailto:divyamshu.raghavendra@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Email</p>
                                    <p className="text-lg font-semibold">divyamshu.raghavendra@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/divyamshu-raghavendra-giyyar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">LinkedIn</p>
                                    <p className="text-lg font-semibold">Giyyar Divyamshu Raghavendra</p>
                                </div>
                            </a>

                            <a href="https://github.com/Divyamshu26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">GitHub</p>
                                    <p className="text-lg font-semibold">Divyamshu26</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <a
                                href="/22BD1A054M.pdf"
                                download
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all shadow-lg"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-lg space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25"
                        >
                            <Send size={20} />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
