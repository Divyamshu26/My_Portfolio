import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Terminal, Cloud, Layout } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
    >
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/60 border border-white/40 rounded-lg text-sm text-slate-600 font-medium">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: Code2,
            skills: ["Python", "Java", "JavaScript", "C++", "C", "SQL"],
        },
        {
            title: "Frameworks",
            icon: Layout,
            skills: ["Spring Boot", "Flask", "React", "Node.js"],
        },
        {
            title: "AI & ML",
            icon: Brain,
            skills: ["Regression", "Time Series", "NLP", "LLMs", "LangChain", "Gemini API", "RAG"],
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["MySQL", "PostgreSQL", "MongoDB"],
        },
        {
            title: "Tools",
            icon: Terminal,
            skills: ["Git", "GitHub", "VS Code", "Postman"],
        },
        {
            title: "Cloud",
            icon: Cloud,
            skills: ["AWS", "Azure", "Firebase", "GCP (Beginner)"],
        },
    ];

    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Technical Skills
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A comprehensive toolkit of languages, frameworks, and technologies I use to build scalable solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard key={category.title} {...category} delay={index * 0.1} />
                ))}
            </div>
        </Section>
    );
};

export default Skills;
