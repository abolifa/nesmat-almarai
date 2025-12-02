"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/80" />

      <motion.img
        src="/images/grain-right.png"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute right-0 top-1/4 w-[260px] md:w-[360px] rotate-15"
      />

      <motion.img
        src="/images/grain-left.png"
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute left-0 top-1/3 w-[260px] md:w-[360px] -rotate-10"
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,215,150,0.06),transparent_70%)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
      >
        <motion.img
          src="/meta/logo-icon-white.png"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto mb-6 w-40 h-40"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          شركة نسمه المراعي الجديدة
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/85 mt-6 max-w-3xl mx-auto"
        >
          ريادة في استيراد المواد الغذائية والمواشي واللحوم بجودة موثوقة وتوريد
          متكامل
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-white text-black text-lg font-bold rounded-xl hover:bg-white/85 transition"
          >
            تواصل معنا
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white text-white text-lg font-bold rounded-xl hover:bg-white/10 transition"
          >
            خدماتنا
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
