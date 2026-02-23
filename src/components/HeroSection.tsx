"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Leaf } from "lucide-react";

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

    // "VERBENA" letters for stagger animation
    const title = '"VERBENA"';
    const letters = title.split("");

    return (
        <section
            id="inicio"
            ref={sectionRef}
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 -top-20"
            >
                {/* Warm gradient background simulating clay/stucco texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C] via-[#6B4226] to-[#3D2B1F]" />
                {/* Texture overlay */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
              radial-gradient(ellipse at 20% 50%, rgba(193, 122, 58, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(212, 148, 79, 0.3) 0%, transparent 40%),
              radial-gradient(ellipse at 60% 80%, rgba(139, 94, 60, 0.4) 0%, transparent 45%)
            `,
                    }}
                />
                {/* Fine grain texture */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }}
                />
            </motion.div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/30 to-bark/70" />

            {/* Content */}
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="relative z-10 text-center px-6 max-w-2xl mx-auto"
            >
                {/* Staggered letter animation for title */}
                <h1 className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight text-shadow">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 60, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3 + i * 0.08,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="font-[family-name:var(--font-inter)] text-lg sm:text-xl text-white/90 leading-relaxed mb-8"
                >
                    Significa fiesta popular o feria. Un lugar donde la gente se reúne para
                    celebrar, compartir y disfrutar.
                </motion.p>

                {/* Animated divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="h-1 bg-terracotta mx-auto rounded-full mb-8"
                />

                {/* Italic tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-terracotta-light italic"
                >
                    Justo como lo hacemos aquí: entre aromas, sabores y sonrisas.
                </motion.p>

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.4, type: "spring" }}
                    className="mt-12 flex flex-col items-center gap-3"
                >
                    <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl shadow-black/20">
                        <Leaf className="w-10 h-10 text-bark" />
                    </div>
                    <span className="font-[family-name:var(--font-inter)] text-sm font-semibold tracking-[0.3em] text-white/80 uppercase">
                        La Ververa
                    </span>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 text-white/60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
