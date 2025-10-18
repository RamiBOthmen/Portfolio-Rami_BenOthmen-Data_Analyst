import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rami Ben Othmen
          </h1>
          <p className="mt-2 text-sky-700 dark:text-sky-300 font-medium">
            Data Analyst | SQL & Visualization Enthusiast
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Google certified Data Analyst and top graduate of a professional Master's program in Business Intelligence. With one year of experience in web development and a passion for transforming complex data into actionable insights. Seeking a full-time role as a Data Analyst or Data Engineer.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
              View Projects
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-md border border-sky-600 px-4 py-2 text-sky-700 hover:bg-sky-50 dark:text-sky-300 dark:border-sky-300 dark:hover:bg-sky-950/30">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/50">
            <p className="text-sm text-gray-500">Dashboards</p>
            <p className="mt-2 text-2xl font-semibold">Tableau · Power BI</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/50">
            <p className="text-sm text-gray-500">Data</p>
            <p className="mt-2 text-2xl font-semibold">SQL · Python · R</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/50">
            <p className="text-sm text-gray-500">ETL</p>
            <p className="mt-2 text-2xl font-semibold">Pipelines · QA</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/50">
            <p className="text-sm text-gray-500">Communication</p>
            <p className="mt-2 text-2xl font-semibold">Stakeholders</p>
          </div>
        </div>
      </div>
    </section>
  );
} 