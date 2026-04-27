import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Your Certificate Title",
    issuer: "Issuing Organization",
    date: "2025",
    credentialUrl: "",
  },
  {
    title: "Another Certificate",
    issuer: "Issuing Organization",
    date: "2024",
    credentialUrl: "",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 px-6 bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Certifications
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title + i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${cert.title} credential`}
                        className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          Replace the placeholder entries in <code className="text-primary">CertificationsSection.tsx</code> with your real certifications.
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;
