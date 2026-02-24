"use client";

import { motion } from "framer-motion";
import { Star, Clock, Flame, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedGradientBlobs from "./AnimatedGradientBlobs";

export default function MenuSection() {
    return (
        <section id="menu" className="relative py-24 px-6 overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 texture-overlay bg-cream" />
            <AnimatedGradientBlobs variant="warm" opacity={0.4} />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section badge */}
                <AnimatedSection className="flex justify-center mb-6">
                    <div className="flex gap-2">
                        <span className="px-4 py-1.5 rounded-full bg-sage/15 text-sage text-xs font-semibold uppercase tracking-wider border border-sage/20">
                            Ancestral
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-terracotta/15 text-terracotta text-xs font-semibold uppercase tracking-wider border border-terracotta/20">
                            Maíz
                        </span>
                    </div>
                </AnimatedSection>

                {/* Featured Dish Image */}
                <AnimatedSection delay={0.1} direction="scale" className="mb-10">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-bark/15 aspect-[4/3] max-w-lg mx-auto"
                    >
                        {/* Gradient image placeholder simulating a warm food photo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C17A3A] via-[#8B5E3C] to-[#5C4033]" />
                        <div
                            className="absolute inset-0 opacity-60"
                            style={{
                                backgroundImage: `
                  radial-gradient(circle at 30% 40%, rgba(255, 200, 100, 0.5) 0%, transparent 40%),
                  radial-gradient(circle at 70% 60%, rgba(200, 100, 50, 0.4) 0%, transparent 35%),
                  radial-gradient(circle at 50% 50%, rgba(255, 220, 150, 0.3) 0%, transparent 50%)
                `,
                            }}
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bark/80 to-transparent p-6">
                            <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white text-shadow">
                                Birria de Res
                            </h3>
                        </div>
                    </motion.div>
                </AnimatedSection>

                {/* Title + Stars */}
                <AnimatedSection delay={0.2} className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-bark">
                            Sabores de la Tierra
                        </h2>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-terracotta text-terracotta" />
                            ))}
                            <Star className="w-4 h-4 text-terracotta/30" />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Quote */}
                <AnimatedSection delay={0.3} className="text-center mb-10">
                    <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-clay leading-relaxed">
                        &ldquo;Donde la tradición encuentra su destino en el barro caliente.&rdquo;
                    </p>
                </AnimatedSection>

                {/* Description */}
                <AnimatedSection delay={0.35} className="text-center mb-10 max-w-2xl mx-auto">
                    <p className="text-bark-light/80 leading-relaxed text-sm sm:text-base">
                        Cada bocado es un viaje a las raíces. Nuestra birria se prepara lentamente en ollas de barro
                        tradicionales con chiles seleccionados y especias ancestrales. Acompañada de tortillas hechas a mano,
                        cebolla, cilantro y limón. También disfruta nuestros antojitos de maíz azul,
                        una experiencia que es memoria viva de nuestros abuelos.
                    </p>
                </AnimatedSection>

                {/* Stats Badges */}
                <AnimatedSection delay={0.4} className="flex justify-center gap-6 sm:gap-10 mb-12">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-cream-dark flex items-center justify-center shadow-sm">
                            <Clock className="w-5 h-5 text-terracotta" />
                        </div>
                        <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-bark">45m</span>
                        <span className="text-xs text-bark-light/60 uppercase tracking-wider">Prep</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-cream-dark flex items-center justify-center shadow-sm">
                            <Flame className="w-5 h-5 text-terracotta" />
                        </div>
                        <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-bark">Picante</span>
                        <span className="text-xs text-bark-light/60 uppercase tracking-wider">Nivel</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-cream-dark flex items-center justify-center shadow-sm">
                            <Zap className="w-5 h-5 text-terracotta" />
                        </div>
                        <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-bark">380</span>
                        <span className="text-xs text-bark-light/60 uppercase tracking-wider">Kcal</span>
                    </motion.div>
                </AnimatedSection>

                {/* Decorative separator */}
                <AnimatedSection delay={0.5} className="flex justify-center">
                    <div className="w-16 h-0.5 bg-terracotta/30 rounded-full" />
                </AnimatedSection>
            </div>
        </section>
    );
}
