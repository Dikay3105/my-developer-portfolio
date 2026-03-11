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
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Passionate about <br />
            <span className="text-gradient">digital solutions</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With over 5 years of software development experience, I specialize in building modern 
              web applications with cutting-edge technology.
            </p>
            <p>
              I believe great code doesn't just work — it should be readable, maintainable, and deliver 
              an outstanding experience for end users.
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
            { number: "5+", label: "Years Experience" },
            { number: "30+", label: "Projects Completed" },
            { number: "10+", label: "Technologies Mastered" },
            { number: "99%", label: "Client Satisfaction" },
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
