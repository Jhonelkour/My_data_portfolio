import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";

export const metadata = {
  title: "Data Science Portfolio",
  description: "Oussama El-Kourdini — Data Scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  primary: '#137fec',
                  'background-light': '#f6f7f8',
                  'background-dark': '#101922',
                },
                fontFamily: {
                  display: ['Space Grotesk'],
                },
                borderRadius: {
                  DEFAULT: '0.25rem',
                  lg: '0.5rem',
                  xl: '0.75rem',
                  full: '9999px',
                },
              },
            },
          };
        `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen antialiased">
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-primary/20">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                OUSSAMA EL-KOURDINI
              </span>
            </Link>
            <Nav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-12 px-6 border-t border-primary/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="font-bold tracking-tight">
                  OUSSAMA EL-KOURDINI
                </span>
              </Link>
              <p className="text-slate-500 text-xs">
                © 2026 Oussama El-Kourdini. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="https://github.com/Jhonelkour"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="https://www.linkedin.com/in/oussama-el-kourdini/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
