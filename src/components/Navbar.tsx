"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
    { label: "Bebidas", href: "#bebidas" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-cream/95 backdrop-blur-md shadow-lg shadow-bark/5"
                    : "bg-transparent"
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`w-8 h-8 rounded-full overflow-hidden flex items-center justify-center transition-all ${scrolled ? "bg-terracotta/10" : "bg-white/20"}`}
                        >
                            <Image
                                src="/images/logo-ververa.png"
                                alt="Logo La Ververa"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </motion.div>
                        <span
                            className={`font-[family-name:var(--font-playfair)] text-lg font-bold tracking-wider transition-colors duration-300 ${scrolled ? "text-bark" : "text-white"
                                }`}
                        >
                            LA VERVERA
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-terracotta relative group ${scrolled ? "text-bark-light" : "text-white/90"
                                        }`}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                        <li>
                            <motion.a
                                href="#reservar"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white warm-gradient shadow-lg shadow-terracotta/25 hover:shadow-terracotta/40 transition-shadow"
                            >
                                Reservar
                            </motion.a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-bark" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-bark/98 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setMobileOpen(false)}
                                className="font-[family-name:var(--font-playfair)] text-3xl text-cream hover:text-terracotta transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#reservar"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 px-8 py-3 rounded-full text-lg font-semibold text-white warm-gradient"
                        >
                            Reservar Mesa
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
