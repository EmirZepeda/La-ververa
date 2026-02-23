"use client";

import { Leaf } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-10 px-6 bg-bark text-center">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-terracotta" />
                    </div>
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-cream/80 text-sm tracking-wider mb-1">
                    La Ververa
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-cream/40 text-sm italic">
                    Cocina Ancestral Mexicana
                </p>
                <div className="mt-6 pt-6 border-t border-cream/10">
                    <p className="text-cream/30 text-xs">
                        &copy; 2026 La Ververa. Cocina creativa.
                    </p>
                </div>
            </div>
        </footer>
    );
}
