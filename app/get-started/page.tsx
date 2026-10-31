"use client";
import ComponentCard from "../components/ComponentCard";
import GridLayout from "../components/GridLayout";
import Button from "../demo/Button/Button";
import Layout from "../demo/Layout/Layout";
import Progress from "../demo/Progress/Progress";
import SearchableView from "../demo/SearchableView/SearchableView";

const components = [
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
        wrapper={({children})=><ul>{children}</ul>}
      />  
    ),
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
      <h1 className="text-6xl font-bold">Free Web Component Library</h1>
      <GridLayout>
        {components.map((c) => (
          <ComponentCard
            name={c.name}
            desc={c.desc}
            href={c.href}
            key={c.id}
            demo={c.demo}
          />
        ))}
      </GridLayout>
    </div>
  );
}
