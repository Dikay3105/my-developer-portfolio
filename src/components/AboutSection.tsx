import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Về tôi
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Đam mê tạo ra <br />
            <span className="text-gradient">giải pháp số</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Với hơn 5 năm kinh nghiệm phát triển phần mềm, tôi chuyên xây dựng các ứng dụng web 
              hiện đại với công nghệ tiên tiến nhất.
            </p>
            <p>
              Tôi tin rằng code tốt không chỉ hoạt động — nó phải dễ đọc, dễ bảo trì và mang lại 
              trải nghiệm tuyệt vời cho người dùng cuối.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { number: "5+", label: "Năm kinh nghiệm" },
            { number: "30+", label: "Dự án hoàn thành" },
            { number: "10+", label: "Công nghệ thành thạo" },
            { number: "99%", label: "Khách hàng hài lòng" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
