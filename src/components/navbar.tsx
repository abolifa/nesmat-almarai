"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navs = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "منتجاتنا", href: "#products" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <a href="#hero">
          <img
            src={
              scrolled ? "/meta/logo-colored.png" : "/meta/logo-icon-white.png"
            }
            alt="Logo"
            className="h-18 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navs.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className={`${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-green-700 transition-colors duration-200`}
            >
              {nav.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:info@nesmatalmarai.com.ly"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-9 h-9 flex items-center justify-center rounded-full border p-2",
              scrolled
                ? "border-green-800 hover:bg-green-100"
                : "border-white hover:bg-white/20"
            )}
          >
            <Mail
              size={32}
              className={scrolled ? "text-green-800" : "text-white"}
            />
          </a>

          <a
            href="https://wa.me/218912186060"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-9 h-9 flex items-center justify-center rounded-full border p-2",
              scrolled
                ? "border-green-800 hover:bg-green-100"
                : "border-white hover:bg-white/20"
            )}
          >
            <FaWhatsapp
              size={32}
              className={scrolled ? "text-green-800" : "text-white"}
            />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          <Menu
            size={32}
            className={scrolled ? "text-green-800" : "text-white"}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-md mt-2 px-6 py-6 flex flex-col gap-6 text-lg text-gray-700">
          <a href="#about" className="hover:text-green-700">
            من نحن
          </a>
          <a href="#services" className="hover:text-green-700">
            خدماتنا
          </a>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            تواصل معنا
          </Button>
        </div>
      )}
    </header>
  );
}
