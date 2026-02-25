"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ReservationModal from "./ReservationModal";

export default function ReservationCTA() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id="reservar" className="py-20 px-6 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-bark via-bark-light to-clay" />
                <div className="absolute inset-0 texture-overlay opacity-30" />

                {/* Decorative elements */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-terracotta/20 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-terracotta/15 blur-3xl"
                />

                <div className="relative z-10 max-w-lg mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cream mb-4">
                            ¿Listo para la experiencia?
                        </h2>
                        <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/70 italic mb-10">
                            Reserva tu mesa y déjate llevar por los sabores ancestrales
                        </p>
                    </motion.div>

                    <motion.button
                        onClick={() => setModalOpen(true)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(193, 122, 58, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl warm-gradient text-white text-lg font-bold shadow-2xl shadow-terracotta/30 animate-pulse-soft cursor-pointer"
                    >
                        Reservar Mesa
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight className="w-6 h-6" />
                        </motion.span>
                    </motion.button>
                </div>
            </section>

            <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
