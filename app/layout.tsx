import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Web Component Library",
  description: "A free, open source component library for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="border-t border-black/10 px-6 py-8 text-sm text-foreground/70 dark:border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} Vedansh Shetti {"<vedansh.shetti@gmail.com>"} - Licensed under the Terms and Conditions of the GNU Affero General Public License v3.
            </p>
            <nav aria-label="Footer navigation" className="flex gap-5">
              <a
                href="https://github.com/vedanshshetti/fwcl"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                License
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
