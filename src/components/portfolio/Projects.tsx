import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type ProjectCategory } from "../../lib/data";
import { Section } from "./Section";

const categoryLabels: Record<ProjectCategory, string> = {
  "AI/ML": "AI/ML Projects",
  "Full Stack": "Full Stack Projects",
  QA: "QA Projects",
};

const categoryOrder: ProjectCategory[] = ["AI/ML", "Full Stack", "QA"];

const categoryColors: Record<ProjectCategory, string> = {
  "AI/ML": "bg-slate-100 text-slate-700 dark:bg-brand-900 dark:text-slate-300",
  "Full Stack": "bg-blue-50 text-brand-800 dark:bg-brand-900 dark:text-blue-200",
  QA: "bg-slate-100 text-slate-600 dark:bg-brand-900 dark:text-slate-400",
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-professional-lg dark:border-brand-800 dark:bg-brand-900/40 dark:hover:border-brand-700"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[project.category]}`}>
          {project.category}
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-600 dark:hover:bg-slate-800 dark:hover:text-brand-400"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
        {project.title}
      </h3>

      {project.role && (
        <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">Role: {project.role}</p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
      >
        <ExternalLink className="h-3.5 w-3.5" />
        View on GitHub
      </a>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of my work across AI/ML, full-stack development, and quality assurance."
      className="bg-slate-100/80 dark:bg-brand-950"
    >
      <div className="space-y-14">
        {categoryOrder.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="mb-6 text-xl font-semibold text-slate-800 dark:text-slate-200">
                {categoryLabels[category]}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categoryProjects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
