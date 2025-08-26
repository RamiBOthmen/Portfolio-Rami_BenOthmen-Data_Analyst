import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center">© {new Date().getFullYear()} Rami Ben Othmen. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="mailto:ramibenothmen15@gmail.com" className="hover:text-sky-600">Email</Link>
          <Link href="https://www.linkedin.com/in/rami-ben-othmen" target="_blank" className="hover:text-sky-600">LinkedIn</Link>
          <Link href="https://github.com/RBenOthmen" target="_blank" className="hover:text-sky-600">GitHub</Link>
          {/* <Link href="https://rami-ben-othmen-portfolio.onrender.com" target="_blank" className="hover:text-sky-600">Portfolio</Link> */}
        </div>
      </div>
    </footer>
  );
} 