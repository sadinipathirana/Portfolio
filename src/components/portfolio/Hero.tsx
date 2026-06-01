import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../lib/data";

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-brand-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-200/30 via-transparent to-transparent dark:from-brand-900/20" />

      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand-800 via-brand-600 to-brand-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-brand-300">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200">
            {personalInfo.title}
          </p>

          <p className="mt-4 mx-auto max-w-xl text-lg text-slate-600 dark:text-slate-400">
            {personalInfo.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-professional transition-all hover:bg-brand-900 hover:-translate-y-0.5 dark:bg-brand-600 dark:hover:bg-brand-700"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-brand-600 hover:text-brand-700 dark:border-slate-600 dark:bg-brand-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-white hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-brand-300 hover:text-brand-600 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
