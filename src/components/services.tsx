"use client";
import { motion } from "framer-motion";

const items = [
  { title: "استيراد مواد غذائية", image: "/images/food.jpg" },
  { title: "استيراد مواشي", image: "/images/livestock.webp" },
  { title: "استيراد لحوم", image: "/images/meat.webp" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/services-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-green-900"
        >
          خدماتنا
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src={item.image}
                className="w-full h-64 object-cover bg-white border-b border-green-800"
              />
              <div className="p-7 text-center text-2xl font-semibold text-green-900 bg-white/80 backdrop-blur-sm">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
