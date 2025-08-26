import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h2 className="text-3xl font-semibold">Page not found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">The page you are looking for doesn’t exist.</p>
      <Link href="/" className="mt-6 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Return Home</Link>
    </div>
  );
} 