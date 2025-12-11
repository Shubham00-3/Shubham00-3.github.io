"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Research Reasoner",
        description: "AI research platform processing 400+ academic papers with 89.3% accuracy using Neo4j knowledge graphs and multi-step reasoning pipeline.",
        tags: ["GraphRAG", "Neo4j", "TypeScript", "Docker"],
        github: "https://github.com/Shubham00-3/Research-Reasoner",
        demo: "https://research-reasoner.vercel.app/",
        featured: true
    },
    {
        title: "Resume Tailor AI",
        description: "Multi-node LangGraph pipeline optimizing resumes in 30 seconds. Reduced tailoring time from 2 hours to under a minute.",
        tags: ["LangGraph", "Groq", "FastAPI", "React"],
        github: "https://github.com/Shubham00-3/tailor-resume",
        demo: "https://skill-shine-api.lovable.app",
        featured: true
    },
    {
        title: "NexWrit",
        description: "Full-stack AI document generator for professional Word and PowerPoint files using Google Gemini API with Supabase auth.",
        tags: ["Gemini API", "Supabase", "AWS", "React"],
        github: "https://github.com/Shubham00-3/NexWrit",
        demo: "https://nex-writ.vercel.app",
        featured: true
    },
    {
        title: "SayHungry Voice Agent",
        description: "Bilingual voice-enabled restaurant booking system with real-time audio processing using LiveKit and GPT-4o-mini.",
        tags: ["LiveKit", "OpenAI", "Next.js", "Twilio"],
        github: "https://github.com/Shubham00-3/SayHungry",
        featured: true
    },
    {
        title: "Physician Notetaker",
        description: "AI-powered medical transcript analyzer with NER, sentiment analysis, and automatic SOAP note generation for healthcare.",
        tags: ["NLP", "Healthcare AI", "Python"],
        github: "https://github.com/Shubham00-3/physician-notetaker"
    },
    {
        title: "Research-To-Blog",
        description: "Citation-first research-to-blog pipeline using LangGraph, Groq, and Chroma for accurate, referenced content generation.",
        tags: ["LangGraph", "Chroma", "FastAPI"],
        github: "https://github.com/Shubham00-3/Research-To-Blog"
    },
    {
        title: "Job Tailoring Crew",
        description: "Multi-agent system with CrewAI + Ollama for automated job research, resume tailoring, and interview preparation.",
        tags: ["CrewAI", "Ollama", "AI Agents"],
        github: "https://github.com/Shubham00-3/job-tailoring-crew"
    },
    {
        title: "Financial Analysis Crew",
        description: "Multi-Agent financial analysis platform for stock monitoring and strategy development using CrewAI framework.",
        tags: ["CrewAI", "Finance", "AI Agents"],
        github: "https://github.com/Shubham00-3/financial-crewai"
    }
];

export function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                        Selected Work
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Projects I&apos;ve built
                    </h2>
                </motion.div>

                {/* Featured Projects */}
                <div className="space-y-4 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-card hover:bg-secondary/60 rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-accent/20">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    {/* Left: Content */}
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-serif text-foreground group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                                                Featured
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Links */}
                                        <div className="flex items-center gap-4 pt-2">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Code
                                            </Link>
                                            {project.demo && (
                                                <Link
                                                    href={project.demo}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </Link>
                                            )}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h3 className="text-xl font-serif text-muted-foreground mb-6">Other Projects</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link
                                href={project.github}
                                target="_blank"
                                className="group block bg-card/50 hover:bg-card rounded-xl p-6 transition-all duration-300 border border-transparent hover:border-border h-full"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h4 className="text-lg font-serif text-foreground group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h4>
                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="https://github.com/Shubham00-3"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        View all projects on GitHub
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
