"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        {links.map((link) => {
          const isRoot = link.href === "/";
          const isActive = isRoot
            ? pathname === "/"
            : pathname.startsWith(link.href);
          const base = "hover:text-primary transition-colors";
          const active = isActive
            ? "text-primary border-b-2 border-primary pb-1"
            : "";
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${base} ${active}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="md:hidden flex items-center">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <span className="material-icons">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-700 shadow-md z-40">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col">
            {links.map((link) => {
              const isRoot = link.href === "/";
              const isActive = isRoot
                ? pathname === "/"
                : pathname.startsWith(link.href);
              const active = isActive
                ? "text-primary"
                : "text-slate-700 dark:text-slate-200";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-2 rounded ${active} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
