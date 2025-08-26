"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b border-sky-100/60 dark:border-sky-900/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-sky-700 dark:text-sky-300">
            Rami Ben Othmen
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "transition-colors hover:text-sky-600 dark:hover:text-sky-300 " +
                    (active ? "text-sky-700 dark:text-sky-300" : "text-gray-600 dark:text-gray-300")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-3">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 " +
                    (pathname === item.href ? "text-sky-700 dark:text-sky-300" : "text-gray-700 dark:text-gray-200")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 