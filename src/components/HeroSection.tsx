import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Software Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          Xin chào, tôi là
          <br />
          <span className="text-gradient">Minh Nguyen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12"
        >
          Tôi xây dựng những trải nghiệm web hiện đại, hiệu suất cao và tập trung vào người dùng.
          Chuyên về React, TypeScript & hệ thống phân tán.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4"
        >
          <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Xem dự án
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-6 py-3 rounded-lg font-medium text-primary hover:bg-primary/20 transition-colors">
            <FileText className="w-4 h-4" />
            Xem CV
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-secondary transition-colors">
            Liên hệ
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
