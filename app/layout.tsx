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
  keywords: [
    "react",
    "component",
    "open source",
    "library",
    "free",
    "reactjs",
    "tailwindcss",
    "free forever",
    "no ads",
    "copy paste",
  ],
  creator: "Vedansh Shetti",
  authors: [
    { name: "Vedansh Shetti", url: "https://github.com/vedanshshetti" },
  ],
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "Free React.js Component Library",
    description:
      "A forever free component library - open source and free for all.",
    type: "website",
    url: "https://fwcl.vedansh.me/",
  },
  twitter: {
    card: "summary_large_image",
    title: "FWCL | Free React & Vanilla Component Library",
    description:
      "Forever free, open-source component library for modern web development.",
    site: "https://fwcl.vedansh.me/",
  },
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
        <footer className="border-t border-black/10 bg-foreground/2 px-6 py-8 text-sm text-foreground/60 dark:border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="max-w-2xl leading-6">
              © {new Date().getFullYear()} Vedansh Shetti · Licensed under the
              GNU Affero General Public License v3.
            </p>
            <nav aria-label="Footer navigation" className="flex gap-5">
              <a
                href="https://github.com/vedanshshetti/fwcl"
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-colors hover:text-foreground"
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
