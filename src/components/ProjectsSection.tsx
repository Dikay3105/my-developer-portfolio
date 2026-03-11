import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time payments, inventory management, and analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "Task Management App",
    description: "Task management app with drag-and-drop, real-time collaboration, and smart notifications.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent AI assistant with natural language processing, multi-language support, and API integration.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-3 text-muted-foreground">
                    <Github className="w-5 h-5 hover:text-foreground cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
