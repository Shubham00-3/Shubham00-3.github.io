"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, FileDown } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 relative">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="space-y-8"
                >
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <span className="w-12 h-px bg-accent" />
                        <span className="text-accent text-sm tracking-widest uppercase">
                            AI Engineer & Developer
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight">
                        Hi, I&apos;m Shubham
                        <br />
                        <span className="text-muted-foreground">I build AI systems</span>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                    >
                        Specializing in production-ready AI platforms, RAG architectures,
                        multi-agent systems, and modern web development. Currently pursuing
                        CS at VIT, India.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center gap-4 pt-4"
                    >
                        <Link
                            href="#projects"
                            className="group bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors inline-flex items-center gap-2"
                        >
                            View my work
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="mailto:shubhamgangwar244@gmail.com"
                            className="px-8 py-4 rounded-full border border-border text-foreground hover:bg-card hover:border-accent/50 transition-all"
                        >
                            Get in touch
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Shubham_Gangwar_Resume.pdf"
                            className="group px-8 py-4 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-background transition-all inline-flex items-center gap-2"
                        >
                            <FileDown className="w-4 h-4" />
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-8 pt-8 text-sm"
                    >
                        <Link
                            href="https://github.com/Shubham00-3"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/shubham-gangwar-a33b53204/"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Resume
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
