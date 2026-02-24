"use client";

import { motion } from "framer-motion";

interface Blob {
    color: string;
    size: string;
    initialX: string;
    initialY: string;
    animateX: string[];
    animateY: string[];
    duration: number;
    delay?: number;
    blur?: string;
}

interface AnimatedGradientBlobsProps {
    variant?: "warm" | "cool" | "earth" | "sunset";
    opacity?: number;
    className?: string;
}

const variants: Record<string, Blob[]> = {
    warm: [
        {
            color: "rgba(193, 122, 58, 0.35)",
            size: "clamp(300px, 50vw, 500px)",
            initialX: "10%",
            initialY: "20%",
            animateX: ["10%", "40%", "25%", "10%"],
            animateY: ["20%", "50%", "10%", "20%"],
            duration: 18,
            blur: "80px",
        },
        {
            color: "rgba(212, 168, 67, 0.25)",
            size: "clamp(250px, 40vw, 450px)",
            initialX: "60%",
            initialY: "60%",
            animateX: ["60%", "30%", "70%", "60%"],
            animateY: ["60%", "20%", "50%", "60%"],
            duration: 22,
            delay: 2,
            blur: "90px",
        },
        {
            color: "rgba(139, 94, 60, 0.2)",
            size: "clamp(200px, 35vw, 400px)",
            initialX: "80%",
            initialY: "30%",
            animateX: ["80%", "50%", "85%", "80%"],
            animateY: ["30%", "70%", "40%", "30%"],
            duration: 20,
            delay: 4,
            blur: "100px",
        },
    ],
    cool: [
        {
            color: "rgba(122, 139, 111, 0.3)",
            size: "clamp(280px, 45vw, 480px)",
            initialX: "20%",
            initialY: "30%",
            animateX: ["20%", "50%", "15%", "20%"],
            animateY: ["30%", "60%", "20%", "30%"],
            duration: 20,
            blur: "85px",
        },
        {
            color: "rgba(193, 122, 58, 0.2)",
            size: "clamp(220px, 38vw, 420px)",
            initialX: "70%",
            initialY: "50%",
            animateX: ["70%", "40%", "75%", "70%"],
            animateY: ["50%", "15%", "55%", "50%"],
            duration: 24,
            delay: 3,
            blur: "95px",
        },
    ],
    earth: [
        {
            color: "rgba(107, 66, 38, 0.3)",
            size: "clamp(300px, 50vw, 550px)",
            initialX: "15%",
            initialY: "25%",
            animateX: ["15%", "45%", "20%", "15%"],
            animateY: ["25%", "55%", "15%", "25%"],
            duration: 16,
            blur: "90px",
        },
        {
            color: "rgba(193, 122, 58, 0.25)",
            size: "clamp(250px, 42vw, 480px)",
            initialX: "65%",
            initialY: "45%",
            animateX: ["65%", "35%", "70%", "65%"],
            animateY: ["45%", "10%", "55%", "45%"],
            duration: 21,
            delay: 1,
            blur: "100px",
        },
        {
            color: "rgba(212, 148, 79, 0.2)",
            size: "clamp(200px, 35vw, 380px)",
            initialX: "40%",
            initialY: "70%",
            animateX: ["40%", "70%", "30%", "40%"],
            animateY: ["70%", "30%", "65%", "70%"],
            duration: 25,
            delay: 5,
            blur: "110px",
        },
    ],
    sunset: [
        {
            color: "rgba(212, 148, 79, 0.4)",
            size: "clamp(320px, 55vw, 550px)",
            initialX: "10%",
            initialY: "15%",
            animateX: ["10%", "35%", "20%", "10%"],
            animateY: ["15%", "45%", "10%", "15%"],
            duration: 15,
            blur: "75px",
        },
        {
            color: "rgba(168, 99, 42, 0.3)",
            size: "clamp(280px, 45vw, 500px)",
            initialX: "55%",
            initialY: "55%",
            animateX: ["55%", "25%", "60%", "55%"],
            animateY: ["55%", "20%", "60%", "55%"],
            duration: 19,
            delay: 2,
            blur: "85px",
        },
        {
            color: "rgba(122, 139, 111, 0.15)",
            size: "clamp(180px, 30vw, 350px)",
            initialX: "75%",
            initialY: "35%",
            animateX: ["75%", "50%", "80%", "75%"],
            animateY: ["35%", "65%", "25%", "35%"],
            duration: 23,
            delay: 4,
            blur: "100px",
        },
    ],
};

export default function AnimatedGradientBlobs({
    variant = "warm",
    opacity = 1,
    className = "",
}: AnimatedGradientBlobsProps) {
    const blobs = variants[variant];

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            style={{ opacity }}
        >
            {blobs.map((blob, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: blob.size,
                        height: blob.size,
                        background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
                        filter: `blur(${blob.blur || "80px"})`,
                        left: blob.initialX,
                        top: blob.initialY,
                    }}
                    animate={{
                        left: blob.animateX,
                        top: blob.animateY,
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: blob.delay || 0,
                    }}
                />
            ))}
        </div>
    );
}
