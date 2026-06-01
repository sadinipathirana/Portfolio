import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../../lib/data";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic foundation in information technology."
      className="bg-white dark:bg-brand-900/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-professional dark:border-brand-800 dark:bg-brand-900/40"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{education.degree}</h3>
            <p className="mt-2 text-lg text-brand-600 dark:text-brand-400">{education.institution}</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
