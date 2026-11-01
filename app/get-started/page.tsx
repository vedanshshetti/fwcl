"use client";
import ComponentCard from "../components/ComponentCard";
import GridLayout from "../components/GridLayout";
import Button from "../demo/Button/Button";
import Input from "../demo/Input/Input";
import Layout from "../demo/Layout/Layout";
import Progress from "../demo/Progress/Progress";
import SearchableView from "../demo/SearchableView/SearchableView";

const components = [
  {
    name: "Input",
    id: "1hf0hp63hdbclaz6",
    href: "/demo/Input",
    desc: "A small and simple Input component.",
    demo: (
      <>
        <Input styleVariant="none" />
        <Input styleVariant="polished" />
      </>
    ),
  },
  {
    name: "Button",
    id: "29dhj58fkj912dlx",
    href: "/demo/Button",
    desc: "A nice, customisable button component.",
    demo: (
      <>
        <Button variant="default">Demo (variant: "default")</Button>
        <Button variant="colourful-and-fun">
          Demo (variant: "colourful-and-fun")
        </Button>
        <Button variant="destructive">Demo (variant: "destructive")</Button>
      </>
    ),
  },
  {
    name: "Progress Bar",
    id: "dhj27alzncmsjxp9",
    href: "/demo/Progress",
    desc: "A simple progress bar.",
    demo: (
      <>
        <Progress styleVariant="none" value={17} max={100} />
        <Progress styleVariant="polished" value={49} max={100} />
      </>
    ),
  },
  {
    name: "Layout",
    id: "1ahsur5n39sjd73f",
    href: "/demo/Layout",
    desc: "Easy, out-of-the-box layouts.",
    demo: (
      <Layout
        type="grid"
        className="rounded-md bg-slate-300 p-2 dark:bg-slate-800"
      >
        <span className="rounded bg-blue-500 p-2 text-white">1</span>
        <span className="rounded bg-blue-500 p-2 text-white">2</span>
        <span className="rounded bg-blue-500 p-2 text-white">3</span>
      </Layout>
    ),
  },
  {
    name: "Searchable View",
    id: "2hd957g9z2ka856y",
    href: "/demo/SearchableView",
    desc: "Filter a list of objects as you type.",
    demo: (
      <SearchableView
        data={[{ name: "Burger" }, { name: "French Fries" }, { name: "Salad" }]}
        filterOn="name"
        mapCb={(i) => <li key={i.name}>{i.name}</li>}
        wrapper={({ children }) => <ul>{children}</ul>}
      />
    ),
  },
];

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background px-4 py-12 font-sans text-foreground sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-96 w-full max-w-5xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.1),_transparent_65%)]" />
      <header className="relative z-10 mb-12 flex max-w-3xl flex-col items-center text-center">
        <span className="mb-5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/55">
          Component library
        </span>
        <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
          Start with something{" "}
          <span className="text-green-700 dark:text-green-400">great.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-foreground/60 sm:text-lg">
          Browse a handful of flexible, copy-friendly components. Search the
          collection below and jump into any component to see how it works.
        </p>
      </header>
      <SearchableView
        data={components}
        filterOn="name"
        mapCb={(c) => (
          <ComponentCard
            name={c.name}
            desc={c.desc}
            href={c.href}
            key={c.id}
            demo={c.demo}
          />
        )}
        wrapper={GridLayout}
        className="relative z-10 w-full max-w-7xl!"
      />
    </main>
  );
}
