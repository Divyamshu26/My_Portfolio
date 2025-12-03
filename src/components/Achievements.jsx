import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const AchievementCard = ({ title, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
    >
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4 shadow-sm">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </motion.div>
);

const Achievements = () => {
    const achievements = [
        {
            title: "Top 10 – Salesforce CTF",
            icon: Trophy,
        },
        {
            title: "Generative AI Certification",
            icon: Award,
        },
        {
            title: "10+ Real-world Projects",
            icon: Star,
        },
    ];

    return (
        <Section id="achievements">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Achievements
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {achievements.map((achievement, index) => (
                    <AchievementCard key={achievement.title} {...achievement} delay={index * 0.1} />
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
