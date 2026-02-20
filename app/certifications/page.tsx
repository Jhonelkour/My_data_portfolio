"use client";

import { useEffect } from "react";

export default function Certifications() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const items = Array.from(
      document.querySelectorAll(".project-reveal"),
    ) as HTMLElement[];
    if (prefersReduced) {
      items.forEach((el) => {
        el.classList.remove("opacity-0", "translate-y-6");
        el.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.classList.remove("opacity-0", "translate-y-6");
          node.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(node);
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Credentials &amp; <span className="text-primary">Expertise</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              A curated collection of specialized training and
              industry-recognized validations in Data Science, Machine Learning,
              and Cloud Architecture.
            </p>
          </div>
          {/* filters removed per request */}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <article className="project-reveal group transform transition-all duration-700 ease-out opacity-0 translate-y-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
          <div className="h-48 bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <img
              src="/images/it-specialist-python.png"
              alt="IT Specialist - Python"
              className="relative z-10 w-[180px] h-[180px] object-contain"
            />
            <div className="mt-3 w-full flex justify-center" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Certification
              </span>
              <span className="text-xs text-slate-400 italic">May 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              IT Specialist - Python
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Certiport, a Pearson VUE business
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all gap-2"
                href="https://www.credly.com/badges/065e66fe-a61b-4519-bea5-4c71aa0c1374/public_url"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </article>

        {/* Card 2 */}
        <article className="project-reveal group transform transition-all duration-700 ease-out opacity-0 translate-y-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
          <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <img
              src="/images/google-icon-logo-svgrepo-com.svg"
              alt="Google Data Analytics"
              className="relative z-10 h-24 object-contain"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Professional Certificate
              </span>
              <span className="text-xs text-slate-400 italic">August 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Data Analytics Professional
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Google / Coursera
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all gap-2"
                href="https://coursera.org/share/c585b80f54f0cac00d15f278e5cc41a8"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </article>

        {/* Card 3 */}
        <article className="project-reveal group transform transition-all duration-700 ease-out opacity-0 translate-y-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
          <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <img
              src="/images/ibm-svgrepo-com.svg"
              alt="Data Science Fundamentals"
              className="relative z-10 h-24 object-contain"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Professional Certificate
              </span>
              <span className="text-xs text-slate-400 italic">July 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Data Science Fundamentals with Python and SQL
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Google / Coursera
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all gap-2"
                href="https://coursera.org/share/f1639b7b1e2b2eae2f91f4cceeb3bd38"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </article>

        {/* Card 4 */}
        <article className="project-reveal group transform transition-all duration-700 ease-out opacity-0 translate-y-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
          <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <img
              src="/images/datacamp-svgrepo-com.svg"
              alt="Data Analyst in Python"
              className="relative z-10 h-24 object-contain"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Professional Certificate
              </span>
              <span className="text-xs text-slate-400 italic">
                December 2025
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Data Analyst in Python
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              DataCamp
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all gap-2"
                href="https://www.datacamp.com/completed/statement-of-accomplishment/track/2b543a532dbb4110eb1f5981615545487cbccbb6"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </article>

        {/* Card 5 */}
        <article className="project-reveal group transform transition-all duration-700 ease-out opacity-0 translate-y-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
          <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <img
              src="/images/iso-21502-foundation.png"
              alt="ISO 21502 Foundation"
              className="relative z-10 w-[180px] h-[180px] object-contain"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Foundation Certification
              </span>
              <span className="text-xs text-slate-400 italic">
                February 2026
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              ISO 21502 Foundation
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Issued by PECB
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all gap-2"
                href="https://www.credly.com/badges/2c28d909-dc0c-46f4-b4a1-99308be9e23b/public_url"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* reveal on load using IntersectionObserver (client) */}
      <script
        suppressHydrationWarning
      >{`/* placeholder for hydration */`}</script>

      <section className="mt-20 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 w-full">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
            <span className="material-icons-round text-2xl md:text-3xl">
              verified
            </span>
          </div>
          <div className="max-w-2xl md:max-w-3xl text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold">
              Credential Verification
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
              All certificates are verified via third-party providers including
              Credly and Coursera.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
