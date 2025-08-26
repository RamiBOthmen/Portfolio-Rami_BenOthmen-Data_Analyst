import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-16">
      <Hero />
      <Stats />

      <section className="mx-auto max-w-6xl px-4 mt-12">
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/about" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:bg-sky-50/60 dark:hover:bg-sky-900/20 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-white">About</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Background, education, and languages.</p>
          </Link>
          <Link href="/skills" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:bg-sky-50/60 dark:hover:bg-sky-900/20 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-white">Skills</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Technical stack, soft skills, and certifications.</p>
          </Link>
          <Link href="/projects" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:bg-sky-50/60 dark:hover:bg-sky-900/20 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-white">Projects</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">BI dashboards and AI-driven systems.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
