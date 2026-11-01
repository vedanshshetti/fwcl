import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-105px)] flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center font-sans text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_38%)]" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <span className="mb-6 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
          Open source · built for the web
        </span>
        <h1 className="text-balance text-5xl font-bold tracking-[-0.04em] sm:text-7xl">
          Beautiful building blocks,{" "}
          <span className="text-green-700 dark:text-green-400">
            free forever.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-foreground/65 sm:text-xl">
          A small, thoughtful collection of React components you can copy,
          customize, and make your own.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/get-started"
            className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/20 transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-700/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 dark:bg-green-500 dark:text-slate-950 dark:hover:bg-green-400"
          >
            Explore the library
          </Link>
          <a
            href="https://github.com/vedanshshetti/fwcl"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-6 py-3 font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mt-12 font-mono text-xs uppercase tracking-[0.16em] text-foreground/40">
          No ads · No Trackers · Free Forever
        </p>
      </div>
    </main>
  );
}
