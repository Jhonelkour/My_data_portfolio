"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let userScrolled = false;
    function onFirstScroll() {
      userScrolled = true;
      window.removeEventListener("scroll", onFirstScroll);
    }
    window.addEventListener("scroll", onFirstScroll, { passive: true });

    function revealOnScroll(el: Element | null, triggerOnScroll = false) {
      if (!el) return;
      if (prefersReduced) {
        el.classList.remove("opacity-0", "-translate-x-10", "translate-y-10");
        el.classList.add("opacity-100", "translate-x-0", "translate-y-0");
        return;
      }
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            if (triggerOnScroll && !userScrolled) return;
            const node = entry.target as HTMLElement;
            node.classList.remove(
              "opacity-0",
              "-translate-x-10",
              "translate-y-10",
            );
            node.classList.add("opacity-100", "translate-x-0", "translate-y-0");
            obs.unobserve(node);
          });
        },
        { threshold: 0.15 },
      );
      io.observe(el);
    }

    revealOnScroll(heroRef.current, false);
    revealOnScroll(ctaRef.current, false);
  }, []);

  useEffect(() => {
    const left = document.getElementById("tech-left");
    const right = document.getElementById("tech-right");
    const container = document.getElementById("tech-stack");
    if (!left || !right || !container) return;
    const leftHandler = () =>
      container.scrollBy({ left: -300, behavior: "smooth" });
    const rightHandler = () =>
      container.scrollBy({ left: 300, behavior: "smooth" });
    left.addEventListener("click", leftHandler);
    right.addEventListener("click", rightHandler);
    return () => {
      left.removeEventListener("click", leftHandler);
      right.removeEventListener("click", rightHandler);
    };
  }, []);

  const techs = [
    {
      name: "Python",
      img: "/images/Python.svg",
      desc: "Pandas, NumPy, Matplotlib, Seaborn",
    },
    {
      name: "SQL",
      img: "/images/SQL.svg",
      desc: "PostgreSQL, MySQL, Microsoft SQL Server",
    },
    {
      name: "Power BI",
      img: "/images/Power bi.svg",
      desc: "BI, Visual Storytelling, DAX",
    },
    {
      name: "TensorFlow",
      img: "/images/Tensorflow.svg",
      desc: "Deep Learning",
    },
    {
      name: "Tableau",
      img: "/images/Tableau.svg",
      desc: "BI, Visual Storytelling",
    },
    {
      name: "Scikit-Learn",
      img: "/images/scikit-learn-seeklogo.svg",
      desc: "Machine learning",
    },
    {
      name: "Excel",
      img: "/images/Excel.svg",
      desc: "Data wrangling, Pivot Tables",
    },
  ];

  return (
    <main className="relative z-10 selection:bg-primary selection:text-white">
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative flex flex-col md:flex-row items-center justify-between gap-12">
        <div
          id="hero-text"
          ref={heroRef}
          className="flex-1 text-center md:text-left transform transition-all duration-700 ease-out opacity-0 -translate-x-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            AVAILABLE FOR INTERNSHIPS 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-primary">OUSSAMA EL-KOURDINI</span>
            <br />
            Data Scientist
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl">
            Turning complex data into{" "}
            <span className="text-white border-b-2 border-primary">
              actionable insights
            </span>
            . Specializing in predictive modeling and visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-block text-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(19,127,236,0.4)] transition-all"
            >
              View My Projects
            </Link>
            <a
              href="/assets/Cv_Oussama_El_Kourdini.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 bg-background-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">
                download
              </span>
              Download CV
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/10 rounded-full" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background-dark shadow-2xl z-10">
              <img
                src="/images/Gemini_Generated_Image_k2dc5k2dc5k2dc5k.png"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 -left-6 bg-background-dark/80 backdrop-blur shadow-xl border border-primary/20 p-3 rounded-xl z-20 hidden lg:block">
              <span className="material-symbols-outlined text-primary text-3xl">
                database
              </span>
            </div>
            <div className="absolute bottom-20 -right-6 bg-background-dark/80 backdrop-blur shadow-xl border border-primary/20 p-3 rounded-xl z-20 hidden lg:block">
              <span className="material-symbols-outlined text-primary text-3xl">
                insights
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative border-y border-primary/5 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Core Tech Stack</h2>
              <p className="text-slate-500 dark:text-slate-400">
                My technical arsenal for processing, analyzing, and visualizing
                complex datasets across diverse environments.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="relative">
            <button
              id="tech-left"
              aria-label="Scroll left"
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/80 p-2 rounded-full shadow-md hover:bg-primary/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              id="tech-stack"
              className="flex gap-6 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
            >
              {techs.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[220px] flex-shrink-0 group p-8 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-6 text-primary flex items-center justify-center">
                    <img
                      src={t.img}
                      alt={`${t.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              id="tech-right"
              aria-label="Scroll right"
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/80 p-2 rounded-full shadow-md hover:bg-primary/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <style>{`.no-scrollbar::-webkit-scrollbar{display:none} .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-primary font-medium flex items-center space-x-2 group"
            >
              <span>View All Projects</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group cursor-pointer">
              <div className="aspect-video w-full overflow-hidden rounded-2xl mb-6 bg-slate-200 dark:bg-slate-800 relative">
                <img
                  alt="Market Analysis Project"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  src="/images/car-price-predict.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">
                  Machine Learning
                </span>
                <span className="text-slate-500 text-sm italic">May 2025</span>
              </div>
              <a
                href="https://avito-used-car-price-predictor.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-2xl font-bold mb-3 bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Avito Used Car Price Predictor
              </a>
              <p className="text-slate-500 dark:text-slate-400 line-clamp-2">
                Built an automated data collection pipeline using web scraping
                and trained ensemble learning models for real-time used car
                price prediction.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video w-full overflow-hidden rounded-2xl mb-6 bg-slate-200 dark:bg-slate-800 relative">
                <img
                  alt="Credit Risk Decision System dashboard showing model predictions and risk scores"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  src="/images/use-case-credit-risk_2-cover.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">
                  Machine Learning
                </span>
                <span className="text-slate-500 text-sm italic">Nov 2025</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Credit Risk Decision System
              </h3>
              <p className="text-slate-500 dark:text-slate-400 line-clamp-2">
                Developed a machine learning model to predict credit default
                risk, incorporating class imbalance handling and decision
                threshold calibration to optimize profitability (Metric:
                AUC-ROC).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div
          id="cta-box"
          ref={ctaRef}
          className="max-w-4xl mx-auto rounded-3xl bg-primary p-12 text-center text-white relative overflow-hidden transform transition-all duration-700 ease-out opacity-0 translate-y-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-background-dark/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <h2 className="text-4xl font-bold mb-6 relative z-10">
            Ready to build something impactful?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto relative z-10">
            I'm currently seeking internship opportunities for Spring 2026.
            Let's discuss how data can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-primary rounded-xl font-bold hover:shadow-xl transition-all"
            >
              Get In Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/oussama-el-kourdini/"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 border border-white/30 bg-white/10 backdrop-blur-md rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              My LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
