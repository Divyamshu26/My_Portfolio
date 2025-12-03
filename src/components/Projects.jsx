import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, description, tags, github, demo, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full"
    >
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 mb-4 flex-1">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-md border border-blue-100">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-4 mt-auto">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
                    >
                        <Github size={16} /> Code
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
                    >
                        <ExternalLink size={16} /> Live Demo
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "RidePal",
            description: "AI-powered Uber-style Ride Assistant helping users find optimal rides.",
            tags: ["AI/ML", "React", "Python"],
            github: "https://github.com/Divyamshu26/ridepal-genai",
        },
        {
            title: "Choti Bhojan Yatra",
            description: "Food Waste Management Platform connecting donors with NGOs.",
            tags: ["Full Stack", "React", "Node.js"],
            github: "https://github.com/Divyamshu26/choti_bhojan_yatra",
        },
        {
            title: "ServiceHub",
            description: "Service Provider Booking Platform for local services.",
            tags: ["Full Stack", "MERN"],
            github: "https://github.com/Divyamshu26/ServiceHub-chatbot",
        },
        {
            title: "Ride Fare Prediction",
            description: "Machine Learning Regression model to predict ride fares accurately.",
            tags: ["ML", "Regression", "Python"],
            github: "https://github.com/Divyamshu26/Ride-Fare-Prediction",
        },
        {
            title: "Food Demand Forecasting",
            description: "Time Series ML model to forecast food demand for restaurants.",
            tags: ["ML", "Time Series", "Python"],
            github: "https://github.com/Divyamshu26/Food-Demand-Forecasting",
        },
        {
            title: "Chat Intent Classification",
            description: "NLP model to classify user intents in chat applications.",
            tags: ["NLP", "Deep Learning"],
            github: "https://github.com/Divyamshu26/Chat-Intent-Classification",
        },
        {
            title: "House Price Prediction",
            description: "End-to-end ML Regression Pipeline for housing price estimation.",
            tags: ["ML", "Pipeline", "Python"],
            github: "https://github.com/Divyamshu26/House-Price-Prediction",
        },
    ];

    return (
        <Section id="projects" className="bg-white/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Featured Projects
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A showcase of my work in Full-Stack Development, AI, and Machine Learning.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} delay={index * 0.1} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
