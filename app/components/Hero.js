"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto text-center mb-24">
      <motion.h1
        className="text-5xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        LectoCoach  
        <span className="text-blue-400"> — Aprende a comprender mejor</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Una herramienta impulsada por IA diseñada para mejorar la comprensión lectora  
        mediante preguntas inteligentes, correcciones inmediatas y retroalimentación personalizada.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          href="/lectocoach"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Probar LectoCoach
        </Link>
      </motion.div>
    </section>
  );
}