import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" className="bg-white/60 dark:bg-slate-900/30 !pt-12 transition-colors duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        About Me
                    </h2>
                    <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        <p className="font-semibold text-slate-800 dark:text-white text-xl">
                            Hi, I&apos;m Divyamshu Raghavendra.
                        </p>
                        <p>
                            I&apos;m a Computer Science Engineering graduate and Full Stack Developer passionate about building scalable, user-centric web applications. I enjoy working across the entire development lifecycle—from creating intuitive frontend experiences to developing secure backend systems, REST APIs, and efficient database architectures.
                        </p>
                        <p>
                            Alongside full-stack development, I&apos;ve worked on AI and Machine Learning projects by integrating technologies like Generative AI, predictive models, and conversational assistants into real-world applications. I enjoy writing clean, maintainable code and continuously learning modern technologies to build practical software solutions.
                        </p>
                        <p>
                            I&apos;m currently seeking opportunities as a Software Engineer, Full Stack Developer, Backend Developer, or AI Engineer, where I can contribute to impactful products while continuing to grow as a developer.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/40 dark:bg-slate-900/60 backdrop-blur-lg border border-white/50 dark:border-slate-800 p-8 rounded-2xl shadow-xl"
                >
                    <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Key Highlights</h3>
                    <ul className="space-y-4">
                        {[
                            "🏆 Top 10 in Salesforce CTF",
                            "🤖 Certified in Generative AI",
                            "💻 10+ Full Stack & AI Projects",
                            "📚 Strong DSA & Problem Solving",
                            "🌐 MERN & FastAPI Development",
                            "🧠 Machine Learning & LLM Integration"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
