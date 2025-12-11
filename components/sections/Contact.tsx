"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                        Contact
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                        Let&apos;s work together
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mb-12">
                        I&apos;m currently open to new opportunities. If you have a project
                        in mind or just want to chat, feel free to reach out.
                    </p>

                    {/* Email CTA */}
                    <Link
                        href="mailto:shubhamgangwar244@gmail.com"
                        className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-serif text-foreground hover:text-accent transition-colors"
                    >
                        <Mail className="w-8 h-8" />
                        shubhamgangwar244@gmail.com
                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                    {/* Social Links */}
                    <div className="mt-16 pt-16 border-t border-border">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">GitHub</p>
                                <Link href="https://github.com/Shubham00-3" target="_blank" className="text-foreground hover:text-accent transition-colors">
                                    @Shubham00-3
                                </Link>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">LinkedIn</p>
                                <Link href="https://www.linkedin.com/in/shubham-gangwar-a33b53204/" target="_blank" className="text-foreground hover:text-accent transition-colors">
                                    Shubham Gangwar
                                </Link>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Location</p>
                                <p className="text-foreground">India</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Resume</p>
                                <Link href="/resume.pdf" target="_blank" className="text-foreground hover:text-accent transition-colors">
                                    Download PDF
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
