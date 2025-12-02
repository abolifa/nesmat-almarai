"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("to", "info@watanalmajd.com.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      if (text.includes("OK")) {
        setSent(true);
        form.reset();
      } else {
        setError("⚠ حدث خطأ أثناء الإرسال");
      }
    } catch {
      setError("⚠ فشل الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 bg-[#0b0f0d] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,145,0.05),transparent_75%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[conic-gradient(from_90deg,rgba(0,120,60,0.15),transparent,rgba(255,240,160,0.08))] blur-[120px] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold bg-linear-to-b from-white to-green-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,135,0.25)]">
            تواصل معنا
          </h2>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto leading-[1.9]">
            شركة نسمه المراعي الجديدة — جاهزون للتوريد والتعاون، تواصل معنا
            للطلبات أو شراكات التوريد.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="bg-white/8 border border-white/10 rounded-3xl backdrop-blur-xl p-10 space-y-10 shadow-[0_0_50px_rgba(0,0,0,0.35)]"
          >
            <div className="flex gap-5 items-start">
              <Phone className="w-7 h-7 text-green-300 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">الهاتف</h4>
                <a
                  href="tel:+218912186060"
                  dir="ltr"
                  className="text-white/85 hover:text-green-300 transition underline"
                >
                  +218 91 218 6060
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Mail className="w-7 h-7 text-green-300 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">البريد الإلكتروني</h4>
                <a
                  href="mailto:info@nesmatalmarai.com.ly"
                  className="text-white/85 hover:text-green-300 transition underline"
                >
                  info@nesmatalmarai.com.ly
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <MapPin className="w-7 h-7 text-green-300 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">العنوان</h4>
                <p className="text-white/80">كرزاز - مصراته | ليبيا</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-white/10 shadow-inner">
              <iframe
                src="https://maps.google.com/maps?q=32.34065861238693,15.094341084654713&z=15&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="bg-white/8 border border-white/10 rounded-3xl backdrop-blur-xl p-10 flex flex-col gap-6 shadow-[0_0_60px_rgba(0,0,0,0.45)]"
          >
            <input
              name="name"
              placeholder="الاسم بالكامل"
              required
              className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-green-300 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              required
              className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-green-300 outline-none"
            />

            <input
              name="phone"
              placeholder="رقم الهاتف"
              className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-green-300 outline-none"
            />

            <input
              name="subject"
              placeholder="الموضوع"
              className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-green-300 outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="اكتب رسالتك..."
              required
              className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-green-300 outline-none"
            />

            {sent && (
              <p className="text-green-300 text-sm text-center">
                ✓ تم إرسال الرسالة بنجاح
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="py-4 rounded-xl bg-green-500 hover:bg-green-600 transition text-black font-bold text-lg disabled:opacity-50"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
