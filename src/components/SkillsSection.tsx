import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"] },
  { category: "Other", items: ["Git", "Agile/Scrum", "System Design", "REST/GraphQL", "Testing"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">Technologies & Tools</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gradient">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
