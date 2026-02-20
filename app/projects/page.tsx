"use client";

import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  demo?: string;
  repo?: string;
};

const ALL_PROJECTS: Project[] = [
  {
    id: "avito",
    title: "Avito Used Car Price Predictor",
    description:
      "Automated data collection pipeline and ensemble models for used car price prediction.",
    img: "/images/Price-Prediction-in-Online-Car-Marketplaces.png",
    categories: ["Machine Learning"],
    demo: "https://avito-used-car-price-predictor.streamlit.app/",
    repo: "https://github.com/Jhonelkour/avito-used-car-price-predictor",
  },
  {
    id: "credit",
    title: "Credit Risk Decision System",
    description:
      "Machine learning model for loan default prediction with calibration to optimize profitability.",
    img: "/images/use-case-credit-risk_2-cover.jpg",
    categories: ["Machine Learning"],
    repo: "https://github.com/Jhonelkour/bank-credit-scoring-model",
  },
  {
    id: "netflix",
    title: "Netflix Movies & TV Shows Analysis",
    description: "EDA on 8,000+ Netflix titles to surface trends and insights.",
    img: "/images/netflix-symbol-black.png",
    categories: ["Data Visualization"],
    repo: "https://github.com/Jhonelkour/Netflix-Movies-and-TV-Shows-Analysis",
  },
  {
    id: "cats",
    title: "Annotation Classification — Cats vs Dogs",
    description:
      "Labeling and annotation pipeline for Cats vs Dogs dataset for computer vision training.",
    img: "/images/Cat-and-Dog-Classification.jpg",
    categories: ["Computer Vision", "Machine Learning"],
    repo: "https://github.com/Jhonelkour/cat-dog-object-detection-annotation",
  },
];

export default function Projects() {
  const [checked, setChecked] = useState<string[]>([]);
  const [appliedChecked, setAppliedChecked] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [techFilters, setTechFilters] = useState<string[]>([]);

  const TECH_LINKS: Record<string, string[]> = {
    Python: ["avito", "credit", "netflix"],
    PyTorch: [],
    "Scikit-learn": ["avito", "credit"],
    Pandas: ["avito", "credit", "netflix"],
    SQL: [],
    Tableau: [],
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    ALL_PROJECTS.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    let list = ALL_PROJECTS.slice();
    // If tech filters are active, use them as the primary filter (override categories)
    if (techFilters.length) {
      const allowed = new Set<string>(
        techFilters.flatMap((t) => TECH_LINKS[t] || []),
      );
      list = list.filter((p) => allowed.has(p.id));
    } else if (appliedChecked.length) {
      list = list.filter((p) =>
        p.categories.some((c) => appliedChecked.includes(c)),
      );
    }
    if (query.trim())
      list = list.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      );
    // query filter applies on the current list
    return list;
  }, [appliedChecked, query, techFilters]);

  function toggleCategory(cat: string) {
    setChecked((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  }

  function applyFilters() {
    setAppliedChecked(checked.slice());
  }

  function toggleTech(t: string) {
    setTechFilters((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
      <aside className="w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-24 space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Search
            </h3>
            <div className="relative">
              <input
                className="w-full bg-primary/5 border border-primary/20 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Project name..."
                type="text"
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="material-icons absolute left-3 top-2.5 text-primary/50 text-sm">
                search
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Categories
            </h3>
            <div className="space-y-3">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    className="category-checkbox rounded border-primary/30 text-primary focus:ring-primary bg-transparent"
                    type="checkbox"
                    id={`cat-${cat}`}
                    value={cat}
                    checked={checked.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
              <div className="mt-4">
                <button
                  id="applyCategoriesBtn"
                  onClick={applyFilters}
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "PyTorch",
                "Scikit-learn",
                "Pandas",
                "SQL",
                "Tableau",
              ].map((t) => {
                const active = techFilters.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleTech(t)}
                    className={`px-3 py-1 text-xs border rounded-full transition-all ${
                      active
                        ? "bg-primary text-white border-primary"
                        : "border-primary/30 hover:bg-primary hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <p id="noResults" className={`text-center text-slate-500 hidden mt-8`}>
          No projects found for the selected category.
        </p>
      </aside>

      <main className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Projects <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Exploring data through code and visualization.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 hidden sm:block">
              Sort by:
            </span>
            <select className="bg-primary/5 border border-primary/20 rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
              <option>Latest Published</option>
              <option>Complexity High-Low</option>
              <option>Featured First</option>
            </select>
          </div>
        </div>

        <div
          id="projectsGrid"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-slate-500">
              No projects found for the selected category.
            </div>
          )}
          {filtered.map((p) => {
            if (p.id === "avito") {
              return (
                <div
                  key={p.id}
                  data-category={p.categories.join(", ")}
                  className="group relative md:col-span-2 bg-primary/5 dark:bg-white/5 border border-primary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={p.img}
                      alt={p.title}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between md:w-1/2">
                    <div>
                      <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-white rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary rounded-full">
                          {p.categories[0]}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {p.title}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2"></div>
                      <div className="flex gap-3">
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition"
                          >
                            Open App
                          </a>
                        )}
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 border border-primary/20 text-primary text-sm font-semibold rounded-lg hover:bg-primary/10 transition flex items-center gap-2"
                          >
                            View Case Study{" "}
                            <span className="material-icons text-sm">
                              arrow_forward
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={p.id}
                data-category={p.categories.join(", ")}
                className="bg-primary/5 dark:bg-white/5 border border-primary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-background-dark/50 relative">
                  <img
                    className="w-full h-full object-cover opacity-60"
                    src={p.img}
                    alt={p.title}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    {p.categories.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary/20 text-primary rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div></div>
                    <div className="flex gap-3">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition"
                        >
                          Open App
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 border border-primary/20 text-primary text-sm font-semibold rounded-lg hover:bg-primary/10 transition flex items-center gap-2"
                        >
                          View Case Study{" "}
                          <span className="material-icons text-sm">
                            arrow_forward
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
