export default function Footer() {
  return (
    <footer className="relative w-full py-10 border-t-5 border-[#f3b51b] bg-[#0b0f0d] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,145,0.05),transparent_75%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[conic-gradient(from_90deg,rgba(0,120,60,0.15),transparent,rgba(255,240,160,0.08))] blur-[120px] opacity-80" />
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-center w-full text-sm md:text-base">
          &copy; {new Date().getFullYear()} شركة نسمة المراعي الجديدة | جميع
          الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
