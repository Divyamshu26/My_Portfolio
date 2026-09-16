import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Server, Cloud, Layout, Layers, Cpu } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
    >
        <div>
            <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-white/70 border border-white/60 rounded-lg text-sm text-slate-600 font-medium shadow-xs hover:border-blue-300 hover:text-blue-700 hover:bg-white transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["Python", "SQL", "Java", "C++"],
        },
        {
            title: "Data Engineering",
            icon: Layers,
            skills: ["ETL/ELT", "Data Pipelines", "Data Modeling", "Data Warehousing", "Advanced SQL", "PySpark", "Databricks"],
        },
        {
            title: "AI/ML",
            icon: Brain,
            skills: ["Generative AI", "LLMs", "RAG", "NLP", "Prompt Engineering"],
        },
        {
            title: "Backend & APIs",
            icon: Server,
            skills: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs"],
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["MySQL", "MongoDB", "Snowflake"],
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            skills: ["AWS", "Git", "GitHub", "Docker", "Kubernetes", "CI/CD"],
        },
        {
            title: "Frontend",
            icon: Layout,
            skills: ["React.js", "Next.js", "HTML", "CSS"],
        },
        {
            title: "Core CS",
            icon: Cpu,
            skills: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "Linux"],
        },
    ];

    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Technical Skills
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A comprehensive toolkit of languages, data engineering pipelines, AI/ML models, and frameworks I use to build scalable solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard key={category.title} {...category} delay={index * 0.08} />
                ))}
            </div>
        </Section>
    );
};

export default Skills;
