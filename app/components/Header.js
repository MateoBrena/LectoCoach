"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
        <Link href="/" className="flex items-center gap-3">
            <Image
                src="/logo-lc.png"
                alt="LectoCoach Logo"
                width={40}
                height={40}
                className="rounded-md object-contain hover:opacity-80 transition"
                />
                <span className="text-xl font-bold tracking-wide">
                    LectoCoach
                </span>
      </Link>
        </motion.h1>

        <nav className="hidden md:flex gap-6 text-lg">
          <Link className="hover:text-blue-400 transition" href="/lectocoach">LectoCoach</Link>
          <Link className="hover:text-blue-400 transition" href="/comprension">Comprensión lectora</Link>
          <Link className="hover:text-blue-400 transition" href="/como-funciona">Cómo funciona</Link>
        </nav>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10 p-4 flex flex-col gap-4 text-lg"
        >
          <Link className="hover:text-blue-400 transition" href="/lectocoach" onClick={() => setOpen(false)}>
            LectoCoach
          </Link>
          <Link className="hover:text-blue-400 transition" href="/comprension" onClick={() => setOpen(false)}>
            Comprensión lectora
          </Link>
          <Link className="hover:text-blue-400 transition" href="/como-funciona" onClick={() => setOpen(false)}>
            Cómo funciona
          </Link>
        </motion.nav>
      )}
    </header>
  );
}