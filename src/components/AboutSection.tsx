"use client";

import { Home } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedGradientBlobs from "./AnimatedGradientBlobs";

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-24 px-6 bg-cream-dark relative overflow-hidden">
            <div className="absolute inset-0 texture-overlay" />
            <AnimatedGradientBlobs variant="cool" opacity={0.4} />

            <div className="relative z-10 max-w-4xl mx-auto">

                {/* Section header */}
                <AnimatedSection className="text-center mb-10">
                    <span className="inline-block px-3 py-1 rounded-md bg-bark-light/10 text-terracotta text-xs font-semibold uppercase tracking-widest mb-3 border border-terracotta/20">
                        Ambiente
                    </span>
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-bark">
                        Nuestra Casa
                    </h2>
                </AnimatedSection>

                {/* Instagram Reel embed */}
                <AnimatedSection delay={0.15} direction="up" className="mb-14">
                    <div className="flex justify-center">
                        <div
                            className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-bark/20 border border-terracotta/10"
                            style={{ aspectRatio: "9/16" }}
                        >
                            <iframe
                                src="https://www.instagram.com/reel/DTYls-XCcZW/embed/"
                                className="w-full h-full"
                                frameBorder="0"
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="La Ververa - Reel de Instagram"
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Espíritu de Verbena */}
                <AnimatedSection delay={0.3} className="max-w-xl mx-auto">
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
