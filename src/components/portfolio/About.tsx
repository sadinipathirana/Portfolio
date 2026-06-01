import { motion } from "framer-motion";
import { personalInfo } from "../../lib/data";
import { Section } from "./Section";

export function About() {
  const highlights = [
    "Software Developer with experience in AI/ML, passionate about building intelligent systems and scalable applications.",
    "Experience in real-world projects and internships across full-stack, AI, and embedded systems.",
    "Strong problem-solving and analytical skills with a focus on clean, maintainable code.",
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Focused on developing intelligent software solutions that address real-world challenges."
      className="bg-white dark:bg-brand-900/30"
    >
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-slate-300/30 to-brand-600/10 blur-xl dark:from-brand-800/30 dark:to-brand-900/20" />
            <div className="relative h-64 w-48 sm:h-72 sm:w-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-700">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.profileImageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3 space-y-5"
        >
          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
