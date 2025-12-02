"use client";
import { motion } from "framer-motion";

const products = [
  {
    title: "اللحوم المجمدة",
    desc: "استيراد مباشر من مصادر موثوقة، جودة حفظ عالية.",
    image: "/images/frozen.png",
  },
  {
    title: "مواشي حية",
    desc: "استيراد ماشية ذات صحة ممتازة، فحوصات بيطرية موثقة ونقل آمن.",
    image: "/images/cow.png",
  },
  {
    title: "زيت الطهي",
    desc: "جودة عالية، استخلاص نقي، مناسب للاستخدام اليومي والمطاعم.",
    image: "/images/oil.png",
  },
  {
    title: "التونة المعلبة",
    desc: "مذاق ممتاز، بروتين عالٍ، تغليف محكم يحافظ على النكهة والقيمة الغذائية.",
    image: "/images/tuna.png",
  },
  {
    title: "السكر الأبيض",
    desc: "حبيبات ناعمة، ذوبان سريع، مناسب للمشروبات والحلويات بجميع أنواعها.",
    image: "/images/sugar.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 space-y-32">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.15 }}
            className={`flex flex-col md:flex-row items-center gap-16 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="relative md:w-1/2 flex items-center justify-center"
            >
              <div className="absolute w-[340px] h-[340px] rounded-full bg-green-600/8 blur-2xl" />
              <div className="absolute w-[420px] h-[420px] rounded-full bg-green-300/4 blur-3xl" />
              <img
                src={p.image}
                className="relative w-72 h-auto scale-100 hover:scale-[1.07] transition duration-700 drop-shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="md:w-1/2 space-y-7 text-center md:text-right"
            >
              <h3 className="text-4xl font-extrabold text-green-900 leading-tight">
                {p.title}
              </h3>
              <p className="text-xl text-gray-700 leading-[1.9]">{p.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
