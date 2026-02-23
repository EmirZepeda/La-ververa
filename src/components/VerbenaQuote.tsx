"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function VerbenaQuote() {
    return (
        <section className="py-20 px-6 bg-warm-white relative overflow-hidden">
            <div className="absolute inset-0 texture-overlay" />
            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Big quotation marks */}
                <AnimatedSection direction="scale">
                    <motion.span
                        className="font-[family-name:var(--font-playfair)] text-8xl text-terracotta/20 leading-none block"
                    >
                        &ldquo;&rdquo;
                    </motion.span>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-terracotta mb-6 tracking-wider">
                        VERBENA
                    </h3>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl italic text-clay leading-relaxed">
                        &ldquo;Significa fiesta popular o feria. Un lugar donde la gente se reúne para celebrar, compartir y disfrutar.&rdquo;
                    </p>
                </AnimatedSection>

                {/* Decorative line */}
                <AnimatedSection delay={0.45} className="mt-8 flex justify-center">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-px bg-terracotta/30" />
                        <div className="w-2 h-2 rounded-full bg-terracotta/40" />
                        <div className="w-12 h-px bg-terracotta/30" />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
