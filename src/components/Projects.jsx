import React, { useState } from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, onSelect, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay }}
            whileHover={{ y: -6, scale: 1.01 }}
            onClick={() => onSelect(project)}
            className="group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
        >
            {/* Top Per-Project Gradient Accent Line */}
            <div className={`h-2.5 w-full bg-gradient-to-r ${project.gradient}`} />

            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider border border-slate-200">
                            {project.stats.type}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                            {project.stats.year}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 shrink-0" />
                    </h3>

                    {/* Tagline */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.categorizedTech["Frontend"]?.concat(project.categorizedTech["AI / ML"] || []).slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-xs font-semibold rounded-md border border-blue-100/80">
                                {tag}
                            </span>
                        ))}
                        {project.skills?.slice(0, 1).map((skill) => (
                            <span key={skill} className="px-2.5 py-1 bg-purple-50/80 text-purple-700 text-xs font-semibold rounded-md border border-purple-100/80">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="group-hover:text-blue-600 transition-colors flex items-center gap-1">
                        <Sparkles size={14} className="text-blue-500" /> Click to view details
                    </span>
                    <span className="text-blue-600 font-bold group-hover:underline">
                        Explore →
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Section id="projects" className="bg-slate-50/60 py-20 relative">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
                    Portfolio Showcase
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight">
                    Featured Projects
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
                    Click on any project to explore detailed architecture, key features, challenges solved, and skills demonstrated.
                </p>
            </div>

            {/* Grid of Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={setSelectedProject}
                        delay={index * 0.08}
                    />
                ))}
            </div>

            {/* Showcase Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </Section>
    );
};

export default Projects;
