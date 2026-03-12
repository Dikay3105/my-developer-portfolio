import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Have an exciting project or collaboration opportunity? Don't hesitate to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <a href="mailto:dikay3105@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            dikay3105@gmail.com
          </a>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            Hồ Chí Minh, Việt Nam
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Dikay3105", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vinh-khoa/", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
