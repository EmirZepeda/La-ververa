"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, User, Phone, MessageSquare, CheckCircle, ChevronDown } from "lucide-react";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TIME_SLOTS = [
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30",
];

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: 2,
        notes: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Get today's date as min date
    const today = new Date().toISOString().split("T")[0];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep("form");
                setForm({ name: "", phone: "", date: "", time: "", guests: 2, notes: "" });
                setErrors({});
            }, 400);
        }
    }, [isOpen]);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!form.name.trim()) newErrors.name = "Por favor ingresa tu nombre";
        if (!form.phone.trim()) newErrors.phone = "Por favor ingresa tu teléfono";
        else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(form.phone)) newErrors.phone = "Número de teléfono inválido";
        if (!form.date) newErrors.date = "Por favor selecciona una fecha";
        if (!form.time) newErrors.time = "Por favor selecciona un horario";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1800));
        setLoading(false);
        setStep("success");
    };

    const handleChange = (field: string, value: string | number) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, damping: 30, stiffness: 300 } },
        exit: { opacity: 0, y: 40, scale: 0.96, transition: { duration: 0.25 } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: "rgba(44, 24, 16, 0.80)", backdropFilter: "blur(8px)" }}
                    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                >
                    <motion.div
                        key="modal"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
                        style={{ background: "linear-gradient(160deg, #FAF6F1 0%, #F0E8DD 100%)" }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-200 hover:bg-terracotta/10 text-clay hover:text-terracotta"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Decorative top bar */}
                        <div className="h-1.5 w-full rounded-t-3xl warm-gradient" />

                        <div className="px-7 py-7">
                            <AnimatePresence mode="wait">
                                {step === "form" ? (
                                    <motion.div
                                        key="form-view"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {/* Header */}
                                        <div className="mb-6">
                                            <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-terracotta tracking-widest uppercase mb-1">
                                                La Ververa
                                            </p>
                                            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-bark">
                                                Reserva tu Mesa
                                            </h2>
                                            <p className="text-clay/70 text-sm mt-1">
                                                Completa el formulario y te confirmaremos por WhatsApp
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-medium text-bark mb-1.5">
                                                    Nombre completo *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta/60" />
                                                    <input
                                                        type="text"
                                                        placeholder="Tu nombre"
                                                        value={form.name}
                                                        onChange={(e) => handleChange("name", e.target.value)}
                                                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/70 text-bark placeholder-clay/40 text-sm outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 ${errors.name ? "border-red-400" : "border-clay/20"}`}
                                                    />
                                                </div>
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-sm font-medium text-bark mb-1.5">
                                                    Teléfono / WhatsApp *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta/60" />
                                                    <input
                                                        type="tel"
                                                        placeholder="+52 55 0000 0000"
                                                        value={form.phone}
                                                        onChange={(e) => handleChange("phone", e.target.value)}
                                                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/70 text-bark placeholder-clay/40 text-sm outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 ${errors.phone ? "border-red-400" : "border-clay/20"}`}
                                                    />
                                                </div>
                                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                            </div>

                                            {/* Date & Guests row */}
                                            <div className="grid grid-cols-2 gap-4">
                                                {/* Date */}
                                                <div>
                                                    <label className="block text-sm font-medium text-bark mb-1.5">
                                                        Fecha *
                                                    </label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta/60 pointer-events-none" />
                                                        <input
                                                            type="date"
                                                            min={today}
                                                            value={form.date}
                                                            onChange={(e) => handleChange("date", e.target.value)}
                                                            className={`w-full pl-10 pr-3 py-3 rounded-xl border bg-white/70 text-bark text-sm outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 ${errors.date ? "border-red-400" : "border-clay/20"}`}
                                                        />
                                                    </div>
                                                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                                                </div>

                                                {/* Guests */}
                                                <div>
                                                    <label className="block text-sm font-medium text-bark mb-1.5">
                                                        Personas *
                                                    </label>
                                                    <div className="relative">
                                                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta/60 pointer-events-none" />
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay/50 pointer-events-none" />
                                                        <select
                                                            value={form.guests}
                                                            onChange={(e) => handleChange("guests", Number(e.target.value))}
                                                            className="w-full pl-10 pr-8 py-3 rounded-xl border border-clay/20 bg-white/70 text-bark text-sm outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 appearance-none cursor-pointer"
                                                        >
                                                            {GUEST_OPTIONS.map((n) => (
                                                                <option key={n} value={n}>
                                                                    {n} {n === 1 ? "persona" : "personas"}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Time slots */}
                                            <div>
                                                <label className="flex items-center gap-2 text-sm font-medium text-bark mb-2">
                                                    <Clock className="w-4 h-4 text-terracotta/70" />
                                                    Horario *
                                                </label>
                                                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                                                    {TIME_SLOTS.map((slot) => (
                                                        <button
                                                            key={slot}
                                                            type="button"
                                                            onClick={() => handleChange("time", slot)}
                                                            className={`py-2 px-1 rounded-lg text-xs font-medium transition-all duration-200 border ${form.time === slot
                                                                ? "warm-gradient text-white border-transparent shadow-lg shadow-terracotta/20"
                                                                : "bg-white/60 border-clay/20 text-clay hover:border-terracotta/50 hover:text-terracotta"
                                                                }`}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                                            </div>

                                            {/* Notes */}
                                            <div>
                                                <label className="block text-sm font-medium text-bark mb-1.5">
                                                    Notas especiales
                                                    <span className="text-clay/50 font-normal text-xs ml-1">(opcional)</span>
                                                </label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-terracotta/60" />
                                                    <textarea
                                                        placeholder="Alergias, celebración, preferencias de mesa..."
                                                        value={form.notes}
                                                        onChange={(e) => handleChange("notes", e.target.value)}
                                                        rows={3}
                                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-clay/20 bg-white/70 text-bark placeholder-clay/40 text-sm outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 resize-none"
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <motion.button
                                                type="submit"
                                                disabled={loading}
                                                whileHover={{ scale: loading ? 1 : 1.02 }}
                                                whileTap={{ scale: loading ? 1 : 0.98 }}
                                                className="w-full py-4 rounded-2xl warm-gradient text-white font-bold text-base shadow-xl shadow-terracotta/25 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
                                            >
                                                {loading ? (
                                                    <>
                                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                        </svg>
                                                        Enviando reserva...
                                                    </>
                                                ) : (
                                                    "Confirmar Reserva"
                                                )}
                                            </motion.button>

                                            <p className="text-center text-xs text-clay/50 mt-2">
                                                Te confirmaremos la disponibilidad por WhatsApp en menos de 2 horas
                                            </p>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success-view"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                        className="flex flex-col items-center text-center py-8"
                                    >
                                        {/* Animated check */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", damping: 15, stiffness: 300, delay: 0.1 }}
                                            className="w-20 h-20 rounded-full warm-gradient flex items-center justify-center mb-6 shadow-xl shadow-terracotta/30"
                                        >
                                            <CheckCircle className="w-10 h-10 text-white" />
                                        </motion.div>

                                        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-bark mb-2">
                                            ¡Reserva Enviada!
                                        </h3>
                                        <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-clay mb-6">
                                            Gracias, {form.name.split(" ")[0]}
                                        </p>

                                        {/* Confirmation details */}
                                        <div className="w-full bg-white/60 rounded-2xl p-5 border border-clay/15 text-left space-y-3 mb-6">
                                            <p className="text-xs font-semibold text-terracotta uppercase tracking-widest mb-3">
                                                Detalles de tu reserva
                                            </p>
                                            <Row icon="📅" label="Fecha" value={formatDate(form.date)} />
                                            <Row icon="🕐" label="Hora" value={form.time} />
                                            <Row icon="👥" label="Personas" value={`${form.guests} ${form.guests === 1 ? "persona" : "personas"}`} />
                                            <Row icon="📱" label="Confirmaremos a" value={form.phone} />
                                        </div>

                                        <p className="text-sm text-clay/70 mb-6">
                                            Te enviaremos una confirmación por WhatsApp al{" "}
                                            <span className="font-semibold text-terracotta">{form.phone}</span>{" "}
                                            en menos de 2 horas.
                                        </p>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={onClose}
                                            className="px-8 py-3 rounded-2xl warm-gradient text-white font-bold shadow-lg shadow-terracotta/25"
                                        >
                                            Cerrar
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function Row({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-lg">{icon}</span>
            <div>
                <p className="text-xs text-clay/50">{label}</p>
                <p className="text-sm font-medium text-bark">{value}</p>
            </div>
        </div>
    );
}

function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
}
