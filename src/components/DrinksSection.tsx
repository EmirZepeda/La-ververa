"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import AnimatedGradientBlobs from "./AnimatedGradientBlobs";

export default function DrinksSection() {
    return (
        <section id="bebidas" className="py-24 px-6 bg-cream relative overflow-hidden">
            <div className="absolute inset-0 texture-overlay" />
            <AnimatedGradientBlobs variant="earth" opacity={0.35} />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-10 h-px bg-terracotta/40" />
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-terracotta/70">
                            Tradición
                        </span>
                        <div className="w-10 h-px bg-terracotta/40" />
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1} className="text-center mb-14">
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-bark">
                        Bebidas de Barro
                    </h2>
                </AnimatedSection>

                {/* Drink Card */}
                <AnimatedSection delay={0.2} direction="up">
                    <motion.div
                        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(61, 43, 31, 0.15)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-warm-white rounded-3xl overflow-hidden shadow-xl shadow-bark/8 max-w-md mx-auto border border-terracotta/8"
                    >
                        {/* Drink Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/cantaritos.jpg"
                                alt="Cantaritos de la Casa - jarritos de barro con chile y limón"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 448px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent" />

                            {/* Popular badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -12 }}
                                whileInView={{ scale: 1, rotate: -6 }}
                                transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute top-4 right-4"
                            >
                                <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-terracotta text-white text-xs font-bold shadow-lg">
                                    <TrendingUp className="w-3.5 h-3.5" />
                                    Popular
                                </span>
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-bark">
                                    Cantaritos de la Casa
                                </h3>
                                <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-terracotta ml-4 shrink-0">
                                    $95
                                </span>
                            </div>

                            <p className="text-bark-light/70 text-sm leading-relaxed mb-6">
                                Refrescante mezcla de cítricos frescos (naranja, toronja y lima) servida en jarritos de
                                barro artesanales con nuestra receta secreta de chile seco. El barro mantiene la bebida
                                perfectamente fría mientras despierta los sentidos.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full py-3.5 rounded-2xl border-2 border-terracotta/30 text-terracotta font-semibold text-sm tracking-wide hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-300"
                            >
                                VER DETALLES
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}
