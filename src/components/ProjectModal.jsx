import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, Github, ExternalLink, BookOpen, Brain, MessageSquare, Sparkles, Activity,
    ShieldCheck, Smartphone, BarChart3, Bell, Bot, History, DollarSign, MessageCircle,
    Database, Terminal, Server, Layout, HeartHandshake, Building2, Users, Camera,
    MapPin, Lock, Clock, Shield, Search, Calendar, UserCheck, Briefcase, KeyRound,
    Sliders, ShieldAlert, Cpu, GitCommit, BarChart, Calculator, PieChart, TrendingUp,
    GitBranch, LineChart, Package, FileText, Target, Hash, Layers, CheckCircle,
    Workflow, GitPullRequest, BarChart2, Home, ArrowRight, Check, AlertCircle,
    Lightbulb, Code
} from 'lucide-react';

const ICON_MAP = {
    Brain, MessageSquare, Sparkles, Activity, ShieldCheck, Smartphone, BarChart3, Bell,
    Bot, History, DollarSign, MessageCircle, Database, Terminal, Server, Layout,
    HeartHandshake, Building2, Users, Camera, MapPin, Lock, Clock, Shield, Search,
    Calendar, UserCheck, Briefcase, KeyRound, Sliders, ShieldAlert, Cpu, GitCommit,
    BarChart, Calculator, PieChart, TrendingUp, GitBranch, LineChart, Package,
    FileText, Target, Hash, Layers, CheckCircle, Workflow, GitPullRequest, BarChart2, Home
};

const DynamicIcon = ({ name, size = 20, className = "" }) => {
    const IconComponent = ICON_MAP[name] || Code;
    return <IconComponent size={size} className={className} />;
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    },
    exit: { opacity: 0, scale: 0.96, y: 15, transition: { duration: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-xl transition-opacity"
                />

                {/* Modal Window */}
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative w-full max-w-[1000px] max-h-[90vh] bg-white/90 backdrop-blur-2xl rounded-[24px] shadow-2xl border border-white/60 overflow-hidden flex flex-col z-10 text-slate-800 my-auto"
                >
                    {/* Sticky Header Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/40 text-white hover:bg-slate-900/70 backdrop-blur-md transition-all shadow-md hover:scale-105 active:scale-95"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>

                    {/* Scrollable Container */}
                    <div className="overflow-y-auto flex-1 custom-scrollbar">
                        {/* 1. Hero Image / Banner with Custom Per-Project Gradient */}
                        <motion.div variants={itemVariants} className={`relative w-full h-56 sm:h-72 bg-gradient-to-r ${project.gradient} p-6 sm:p-10 flex flex-col justify-end overflow-hidden`}>
                            {/* Decorative Grid Overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
                            <div className="absolute inset-0 bg-black/20" />

                            <div className="relative z-10 text-white">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3 text-white shadow-sm border border-white/30">
                                    <Sparkles size={14} />
                                    Featured Showcase
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
                                    {project.title}
                                </h1>
                                <p className="text-white/95 text-base sm:text-xl font-medium mt-1 max-w-2xl drop-shadow-sm">
                                    {project.tagline}
                                </p>
                            </div>
                        </motion.div>

                        {/* Modal Body Content */}
                        <div className="p-6 sm:p-10 space-y-10">
                            {/* 2. Project Quick Stats */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Category</span>
                                    <span className="text-sm sm:text-base font-semibold text-slate-800 mt-1">{project.stats.type}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Architecture</span>
                                    <span className="text-sm sm:text-base font-semibold text-slate-800 mt-1">{project.stats.architecture}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Year</span>
                                    <span className="text-sm sm:text-base font-semibold text-slate-800 mt-1">{project.stats.year}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Scope</span>
                                    <span className="text-sm sm:text-base font-semibold text-slate-800 mt-1">{project.stats.featuresCount}</span>
                                </div>
                            </motion.div>

                            {/* 3. Project Overview */}
                            <motion.section variants={itemVariants} className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <FileText size={20} className="text-blue-600" /> Project Overview
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base sm:text-lg bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
                                    {project.overview}
                                </p>
                            </motion.section>

                            {/* 4. Architecture Section */}
                            {project.architectureFlow && (
                                <motion.section variants={itemVariants} className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                        <Workflow size={20} className="text-indigo-600" /> Architecture Flow
                                    </h3>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg overflow-x-auto">
                                        <div className="flex items-center gap-3 min-w-max">
                                            {project.architectureFlow.map((step, idx) => (
                                                <React.Fragment key={idx}>
                                                    <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-sm font-medium text-slate-100 flex items-center gap-2">
                                                        <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                                                            {idx + 1}
                                                        </span>
                                                        {step}
                                                    </div>
                                                    {idx < project.architectureFlow.length - 1 && (
                                                        <ArrowRight size={18} className="text-blue-400 shrink-0 animate-pulse" />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </motion.section>
                            )}

                            {/* 5. Categorized Tech Stack */}
                            <motion.section variants={itemVariants} className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <Layers size={20} className="text-purple-600" /> Categorized Tech Stack
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {Object.entries(project.categorizedTech).map(([category, items]) => (
                                        <div key={category} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {items.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* 6. Key Features (Animated Cards Grid) */}
                            <motion.section variants={itemVariants} className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <Sparkles size={20} className="text-rose-600" /> Key Features
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.keyFeatures.map((feat, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -3, scale: 1.01 }}
                                            transition={{ duration: 0.25 }}
                                            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-blue-200 group flex items-start gap-4"
                                        >
                                            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                                <DynamicIcon name={feat.icon} size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                                                    {feat.title}
                                                </h4>
                                                <p className="text-slate-600 text-sm mt-1 leading-snug">
                                                    {feat.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* 7. Skills Demonstrated */}
                            <motion.section variants={itemVariants} className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <CheckCircle size={20} className="text-emerald-600" /> Skills Demonstrated
                                </h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-semibold border border-emerald-200/80">
                                            <Check size={16} className="text-emerald-600 shrink-0" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* 8. Challenges Solved & What I Learned */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Challenges Solved */}
                                <motion.section variants={itemVariants} className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                        <AlertCircle size={20} className="text-amber-600" /> Challenges Solved
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
                                        {project.challenges.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>

                                {/* What I Learned */}
                                <motion.section variants={itemVariants} className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                        <Lightbulb size={20} className="text-yellow-600" /> What I Learned
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
                                        {project.learnings.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-yellow-500 font-bold mt-0.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>
                            </div>

                            {/* 9. Highlights */}
                            <motion.section variants={itemVariants} className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <Target size={20} className="text-teal-600" /> Highlights
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100 text-slate-800 text-sm font-semibold flex items-center gap-3">
                                            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* 10. Repository Preview & Modern Action Buttons */}
                            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                {project.repoMeta && (
                                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                                        <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                                            {project.repoMeta.visibility} Repository
                                        </span>
                                        <span>•</span>
                                        <span>{project.repoMeta.primaryLanguage}</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-98"
                                        >
                                            <Github size={18} /> View on GitHub
                                        </a>
                                    )}

                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-98"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 text-slate-400 font-semibold text-sm cursor-not-allowed border border-slate-200"
                                        >
                                            <ExternalLink size={18} /> Demo Unavailable
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
