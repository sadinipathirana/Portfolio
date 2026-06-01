import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Container,
  Database,
  Globe,
  Layers,
  Terminal,
} from "lucide-react";
import { skillCategories } from "../../lib/data";
import { Section } from "./Section";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  globe: Globe,
  layers: Layers,
  database: Database,
  terminal: Terminal,
  cloud: Cloud,
  container: Container,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with to build robust solutions."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-professional dark:border-brand-800 dark:bg-brand-900/40 dark:hover:border-brand-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-950 dark:text-brand-400 dark:group-hover:bg-brand-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
