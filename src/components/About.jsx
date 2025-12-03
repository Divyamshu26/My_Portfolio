import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" className="bg-white/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        About Me
                    </h2>
                    <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                        <p>
                            I am a final-year engineering student with a strong foundation in AI/ML, backend systems, and full-stack engineering.
                        </p>
                        <p>
                            Although I haven&apos;t had formal internships yet, I have dedicated my time to building impactful real-world projects that solve actual problems. My passion lies in bridging the gap between complex AI models and user-friendly applications.
                        </p>
                        <p>
                            I am actively looking for roles in Software Development, AI/ML, or Data Engineering where I can apply my problem-solving skills and technical expertise.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/40 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl"
                >
                    <h3 className="text-xl font-semibold mb-6 text-slate-800">Key Highlights</h3>
                    <ul className="space-y-4">
                        {[
                            "Top 10 in Salesforce CTF",
                            "Certified in Generative AI",
                            "Strong Problem Solving & DSA Skills",
                            "10+ Real-world Projects Built"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-700">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
