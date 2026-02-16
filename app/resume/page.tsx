export default function Resume() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <aside className="space-y-10">
          <div className="space-y-4">
            <img
              className="w-32 h-32 rounded-xl object-cover border-2 border-primary mb-6 shadow-lg shadow-primary/10"
              data-alt="Professional headshot of a data science student"
              src="/images/Photp_cv.jpeg"
            />
            <div>
              <h1 className="text-3xl font-bold dark:text-white">
                Oussama El-Kourdini
              </h1>
              <p className="text-primary font-medium">Data Scientist</p>
            </div>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary text-base">
                  location_on
                </span>
                <span>Bouskoura, Ma</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary text-base">
                  mail
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:elkourdinioussama@gmail.com"
                >
                  elkourdinioussama@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary text-base">
                  link
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://github.com/Jhonelkour"
                >
                  https://github.com/Jhonelkour
                </a>
              </div>
            </div>
          </div>

          <div className="d space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
              DOWNLOAD FULL RESUME (PDF)
            </p>
            <div className="flex gap-3">
              <a
                href="/assets/CV%20Oussama_El_Kourdini_Stage_PFE_02_2026%20FR%20B.pdf"
                download
                aria-label="Download French resume (PDF)"
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                <span className="material-icons">download</span>French
              </a>
              <a
                href="/assets/Oussama_El_Kourdini_29_01_2026%20ENG%20B.pdf"
                download
                aria-label="Download English resume (PDF)"
                className="flex-1 bg-background-light dark:bg-slate-800 text-primary border border-primary/20 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span className="material-icons">download</span>English
              </a>
            </div>
          </div>

          <section className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-tighter">
                  Programming &amp; Core
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    SQL
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Java
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-tighter">
                  Data Science &amp; ML
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    PyTorch
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Scikit-learn
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Pandas
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    NLP
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Numpy
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Matplotlib
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-tighter">
                  Tools &amp; Platforms
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Azure
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Tableau
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-medium">
                    Power bi
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3 dark:text-white">
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold dark:text-white">
                  National School of Applied Sciences, Khouribga
                </h4>
                <p className="text-primary text-sm">
                  Master Degree in Artificial Intelligence Engineering,
                  Digitalization, and Data Science
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  October 2024 – July 2026
                </p>
              </div>
              <div>
                <h4 className="font-bold dark:text-white">
                  ALX Africa Data Analytics, Casablanca
                </h4>
                <p className="text-primary text-sm">
                  6-month Training in Data Analytics
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  March 2024 – September 2024
                </p>
              </div>
              <div>
                <h4 className="font-bold dark:text-white">
                  Sultan Moulay Slimane University, Béni Mellal
                </h4>
                <p className="text-primary text-sm">
                  Bachelor's Degree in Banking Professions
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  October 2018 – July 2019
                </p>
              </div>
              <div>
                <h4 className="font-bold dark:text-white">
                  Specialized Institute of Applied Technology, Oued Zem
                </h4>
                <p className="text-primary text-sm">
                  (Diploma / Specialized Studies)
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  October 2015 – July 2017
                </p>
              </div>
            </div>
          </section>
        </aside>

        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold dark:text-white whitespace-nowrap uppercase tracking-widest">
                Professional Experience
              </h2>
              <div className="h-px w-full bg-slate-200 dark:bg-primary/20"></div>
            </div>
            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">
                      Commercial Support Officer (Final-Year Internship)
                    </h3>
                    <p className="text-primary font-medium">
                      BMCE Bank of Africa — Oued Zem, Morocco
                    </p>
                  </div>
                  <div className="mt-1 md:mt-0 text-right">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold uppercase tracking-widest">
                      May 2019
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Processed and ensured the proper execution of counter
                      (front-desk) banking operations.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Provided product information and sales support to retail
                      customers.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Directed clients to appropriate relationship managers when
                      needed.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/40"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">
                      Accountant (Internship)
                    </h3>
                    <p className="text-primary font-medium">
                      ST-ELECTROTOPO S.A.R.L — Oued Zem, Morocco
                    </p>
                  </div>
                  <div className="mt-1 md:mt-0 text-right">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold uppercase tracking-widest">
                      August 2017 – January 2018
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Processed accounting data and recorded financial
                      transactions.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Managed cash collections and maintained client
                      relationships.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/40"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">
                      Procurement Assistant (Internship)
                    </h3>
                    <p className="text-primary font-medium">
                      OCP S.A. — Sidi Chennane, Morocco
                    </p>
                  </div>
                  <div className="mt-1 md:mt-0 text-right">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold uppercase tracking-widest">
                      February 2017
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Prepared and processed purchase orders efficiently.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Managed inventory flows, including stock entries and exits
                      of spare parts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Assisted in receiving imported goods and performed quality
                      inspections.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold dark:text-white whitespace-nowrap uppercase tracking-widest">
                Key Projects
              </h2>
              <div className="h-px w-full bg-slate-200 dark:bg-primary/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-background-light dark:bg-slate-800/40 border border-slate-200 dark:border-primary/10 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-icons text-primary text-3xl">
                    analytics
                  </span>
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <span className="material-icons">open_in_new</span>
                  </a>
                </div>
                <h4 className="font-bold text-lg dark:text-white mb-2">
                  Credit Risk Decision System Project – November 2025
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Developed a credit default risk prediction system with class
                  imbalance handling and decision threshold calibration to
                  optimize business profitability.
                </p>
                <p className="text-xs text-slate-500 mb-3">
                  Evaluation Metric: AUC-ROC
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Python
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Pandas
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Scikit-learn (Random Forest, Logistic Regression)
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Streamlit
                  </span>
                </div>
              </div>

              <div className="group bg-background-light dark:bg-slate-800/40 border border-slate-200 dark:border-primary/10 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-icons text-primary text-3xl">
                    hub
                  </span>
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <span className="material-icons">open_in_new</span>
                  </a>
                </div>
                <h4 className="font-bold text-lg dark:text-white mb-2">
                  Final Year Project (FYP) – Avito Used Car Price Predictor –
                  May–June 2025
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Built an automated data collection pipeline using web scraping
                  and trained ensemble learning models for real-time used car
                  price prediction.
                </p>
                <p className="text-xs text-slate-500 mb-3">
                  Evaluation Metrics: R², MAE, RMSE
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Python
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Selenium
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Scikit-learn (XGBoost, LightGBM, CatBoost, Gradient
                    Boosting)
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                    Streamlit
                  </span>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-8 border-t border-slate-200 dark:border-primary/20 text-center text-xs text-slate-500 uppercase tracking-widest">
            Last Updated: February 2026 <span className="text-primary"></span>
          </footer>
        </div>
      </div>
    </main>
  );
}
<span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
  Streamlit
</span>;
