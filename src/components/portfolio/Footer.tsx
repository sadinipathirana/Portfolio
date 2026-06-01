import { personalInfo } from "../../lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-brand-800 dark:bg-brand-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Design and developed by {personalInfo.name} @ {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
