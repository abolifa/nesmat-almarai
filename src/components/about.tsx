"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-32 md:py-44 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,150,0.07),transparent_75%)] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl text-center px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[42px] md:text-[64px] font-black tracking-wide bg-linear-to-b from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(255,220,150,0.4)]"
        >
          من نحن
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
          className="mt-10 text-2xl text-white/90 leading-[1.85] max-w-4xl mx-auto font-light"
        >
          شركة نسمه المراعي الجديدة — اسم يخطو بثبات داخل قطاع الاستيراد، نوفّر
          الغذاء والمواشي بمعايير جودة عالية، وسلاسل توريد مستمرة، مع التزام
          طويل الأمد وثقة مستحقة في الأسواق.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "رؤيتنا",
              text: "ريادة التوريد الغذائي والمواشي إقليميًا.",
            },
            { title: "رسالتنا", text: "منتجات موثوقة — كفاءة — استدامة." },
            { title: "قيمنا", text: "ثقة • التزام • جودة • شراكات طويلة." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.45 }}
              className="border border-white/10 rounded-2xl p-10 bg-black/50 backdrop-blur-lg shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:bg-black/60 hover:shadow-[0_0_50px_rgba(255,215,150,0.18)] transition"
            >
              <h3 className="text-3xl font-bold text-yellow-300 mb-5">
                {item.title}
              </h3>
              <p className="text-white/85 text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
