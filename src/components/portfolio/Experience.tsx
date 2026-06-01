import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../../lib/data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional experience building real-world software solutions."
    >
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={job.title + job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-professional dark:border-brand-800 dark:bg-brand-900/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                  <p className="mt-1 text-brand-600 dark:text-brand-400 font-medium">{job.company}</p>
                </div>
              </div>
              <span className="inline-flex self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {job.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 dark:border-slate-800">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
