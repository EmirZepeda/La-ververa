"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <section id="nosotros" className="py-24 px-6 bg-cream-dark relative overflow-hidden">
            <div className="absolute inset-0 texture-overlay" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Interior Image with clip-path reveal */}
                <AnimatedSection delay={0.1} direction="up" className="mb-14">
                    <div
                        ref={imageRef}
                        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-bark/20 aspect-[16/10] max-w-2xl mx-auto"
                    >
                        <motion.div
                            style={{ scale: imageScale, y: imageY }}
                            className="absolute inset-0"
                        >
                            {/* Warm interior gradient simulating bamboo/wood restaurant */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#D4944F] via-[#A8632A] to-[#6B4226]" />
                            <div
                                className="absolute inset-0 opacity-70"
                                style={{
                                    backgroundImage: `
                    radial-gradient(circle at 50% 20%, rgba(255, 220, 150, 0.6) 0%, transparent 40%),
                    radial-gradient(circle at 30% 60%, rgba(255, 200, 100, 0.3) 0%, transparent 30%),
                    radial-gradient(circle at 70% 40%, rgba(255, 210, 130, 0.4) 0%, transparent 35%),
                    linear-gradient(180deg, rgba(100, 60, 20, 0.3) 0%, transparent 30%)
                  `,
                                }}
                            />
                            {/* Vertical lines simulating bamboo/wood slats */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: `repeating-linear-gradient(90deg, rgba(61, 43, 31, 0.3) 0px, transparent 2px, transparent 18px)`,
                                }}
                            />
                            {/* Warm hanging light dots */}
                            {[25, 40, 55, 70].map((left) => (
                                <div
                                    key={left}
                                    className="absolute top-[15%] w-4 h-4 rounded-full bg-yellow-200/60 blur-sm"
                                    style={{ left: `${left}%` }}
                                />
                            ))}
                        </motion.div>

                        {/* Overlay with label */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bark/70 to-transparent p-6 sm:p-8">
                            <span className="inline-block px-3 py-1 rounded-md bg-bark-light/80 text-white/90 text-xs font-semibold uppercase tracking-wider mb-2">
                                Ambiente
                            </span>
                            <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white text-shadow">
                                Nuestra Casa
                            </h3>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Espíritu de Verbena */}
                <AnimatedSection delay={0.2} className="max-w-xl mx-auto">
                    <div className="flex items-start gap-4 mb-8">
                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center">
                            <Home className="w-6 h-6 text-terracotta" />
                        </div>
                        <div>
                            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-bark mb-3">
                                Espíritu de Verbena
                            </h3>
                            <p className="text-bark-light/70 text-sm sm:text-base leading-relaxed">
                                &ldquo;Verbena&rdquo; significa fiesta popular o feria. Un lugar donde la gente se reúne para
                                celebrar, compartir y disfrutar. Justo como lo hacemos aquí: entre aromas, sabores y
                                sonrisas.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
