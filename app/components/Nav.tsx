"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname() || "/";
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
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
  );
}
