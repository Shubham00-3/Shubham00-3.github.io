"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";

const certifications = [
    {
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        icon: "🏆"
    },
    {
        title: "Oracle Cloud Infrastructure 2023 Certified Generative AI Professional",
        issuer: "Oracle",
        icon: "🎖️"
    }
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Award className="w-4 h-4" />
                        Credentials
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                            Certifications
                        </span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group flex-1"
                        >
                            <div className="relative h-full p-6 rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-card/40">
                                {/* Gradient Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                                <div className="relative flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 flex items-center justify-center text-2xl">
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <BadgeCheck className="w-4 h-4 text-green-500" />
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
