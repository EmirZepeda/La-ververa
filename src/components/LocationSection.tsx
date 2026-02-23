"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Calendar, Globe, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function LocationSection() {
    return (
        <section id="ubicacion" className="py-24 px-6 bg-cream relative overflow-hidden">
            <div className="absolute inset-0 texture-overlay" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-14">
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-bark mb-2">
                        Ubicación
                    </h2>
                    <p className="text-bark-light/60 text-sm">Visítanos y vive la experiencia</p>
                </AnimatedSection>

                {/* Location Card */}
                <AnimatedSection delay={0.15} direction="up" className="max-w-md mx-auto mb-10">
                    <div className="glass-card rounded-2xl p-5 flex items-center gap-4 shadow-lg shadow-bark/5">
                        {/* Map pin icon box */}
                        <div className="shrink-0 w-16 h-16 rounded-xl bg-terracotta/10 flex items-center justify-center">
                            <MapPin className="w-7 h-7 text-terracotta" />
                        </div>

                        <div className="flex-1">
                            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-bark mb-1">
                                Calle del Sabor #45
                            </h4>
                            <p className="text-bark-light/60 text-sm mb-2">
                                Colonia Centro, Ciudad de México
                            </p>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-sage" />
                                <span className="text-sage text-xs font-medium">
                                    Abierto hoy: 13:00 - 23:00
                                </span>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA Button */}
                <AnimatedSection delay={0.25} className="max-w-md mx-auto mb-10">
                    <motion.a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -12px rgba(193, 122, 58, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl warm-gradient text-white font-semibold text-lg shadow-lg shadow-terracotta/25 transition-shadow"
                    >
                        <MapPin className="w-5 h-5" />
                        Cómo llegar
                    </motion.a>
                </AnimatedSection>

                {/* Action Row */}
                <AnimatedSection delay={0.35} className="max-w-md mx-auto">
                    <div className="flex justify-center gap-8">
                        {[
                            { icon: Phone, label: "Llamar", href: "tel:+525555555555" },
                            { icon: Calendar, label: "Reserva", href: "#reservar" },
                            { icon: Globe, label: "Web", href: "#" },
                        ].map((action) => (
                            <motion.a
                                key={action.label}
                                href={action.href}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-cream-dark group-hover:bg-terracotta/10 flex items-center justify-center transition-colors shadow-sm">
                                    <action.icon className="w-5 h-5 text-bark-light group-hover:text-terracotta transition-colors" />
                                </div>
                                <span className="text-xs font-medium text-bark-light/70 uppercase tracking-wider">
                                    {action.label}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
