import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Web Application for TOEIC Exam",
    period: "Sep 2024 - Jan 2025",
    description:
      "A full-stack web app for TOEIC exam preparation and course sales using .NET, React.js, and Microservices architecture.",
    features: [
      "Managed CRUD operations for users, staff, exams, and courses with robust role-based access controls.",
      "Integrated JWT for secure user authentication and profile management.",
      "Allowed users to select specific TOEIC test parts or complete tests based on their preferences.",
      "Generated detailed performance and sales statistics to enhance user engagement.",
    ],
    tech: [".NET", "React.js", "Bootstrap", "MySQL", "Microservices"],
    github: "https://github.com/ankoa/toeicWebFE",
    demo: "",
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "Holland Career Orientation Web App",
    period: "Sep 2025 - Nov 2025",
    description:
      "Developing a test web app to help students choose suitable majors and exam subject groups.",
    features: [
      "Implemented Holland six-type personality survey with dynamic question flow and automatic scoring algorithm.",
      "Suggested majors, job roles, recommended university entrance exam subject groups and gave advice using AI.",
      "Built analytics dashboards for admins to view test distribution, career interest trends and data export for reporting.",
      "Deployed the platform for real users, reaching 1400+ active test-takers within 4 months.",
    ],
    tech: ["Node.js", "React.js", "MongoDB", "REST API", "Tailwind CSS"],
    github: "",
    demo: "https://pathfinder-holland.onrender.com",
    color: "from-blue-500/20 to-cyan-500/20",
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
