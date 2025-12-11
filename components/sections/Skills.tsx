"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "AI & ML",
        items: ["Multi-Agent RAG", "GraphRAG", "LangGraph", "CrewAI", "Vector Embeddings", "Prompt Engineering"]
    },
    {
        category: "Languages",
        items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"]
    },
    {
        category: "Frameworks",
        items: ["Next.js", "React", "FastAPI", "Node.js", "LangChain"]
    },
    {
        category: "Tools & Cloud",
        items: ["Neo4j", "Docker", "AWS", "Vercel", "Supabase", "Railway"]
    }
];

const certifications = [
    "Microsoft Certified: Azure AI Fundamentals",
    "Oracle Cloud Infrastructure 2023 Generative AI Professional"
];

export function Skills() {
    return (
        <section id="about" className="py-32 px-6 bg-card/30">
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                            About
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif mb-8">
                            A bit about me
                        </h2>
                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                I&apos;m Shubham Gangwar, an AI Engineer and Full Stack Developer
                                currently pursuing B.Tech in Computer Science at Vellore Institute
                                of Technology, India.
                            </p>
                            <p>
                                My focus is on building production-ready AI systems — from research
                                platforms processing hundreds of academic papers to voice-enabled
                                booking agents with real-time audio processing.
                            </p>
                            <p>
                                I believe in creating tools that solve real problems, combining
                                modern AI capabilities with clean, maintainable code.
                            </p>
                        </div>

                        {/* Certifications */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                                Certifications
                            </p>
                            <ul className="space-y-2">
                                {certifications.map((cert, i) => (
                                    <li key={i} className="text-foreground">{cert}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                            Expertise
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif mb-8">
                            Technologies I work with
                        </h2>
                        <div className="space-y-8">
                            {skills.map((group, index) => (
                                <div key={index}>
                                    <h3 className="text-foreground font-medium mb-3">{group.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-sm text-muted-foreground px-4 py-2 rounded-full border border-border bg-background hover:border-accent/50 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
