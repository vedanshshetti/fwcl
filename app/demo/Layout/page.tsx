"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/app/components";
import { copyToClipboard } from "@/app/stuff";
import Layout, { jsxTailwind, tsxTailwind } from "./Layout";
import LicenseText from "./LicenseText";

function Page() {
  const sectionClass = "flex flex-col mt-4 gap-4";
  const [x, sX] = useState(false);
  useEffect(() => {
    if (!x) return;
    const t = setTimeout(() => sX(false), 500);
    return () => clearTimeout(t);
  }, [x]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold">
        Layout - A quick and easy way to make layouts simpler.
      </h1>
      <span className="rounded-xl px-2 py-1 my-2 bg-[#8b959e]">
        License: <Link href={"#license-text"}>MIT (OSI-Approved)</Link>
      </span>
      <p className="text-sm!">
        Building layouts isn't fun: Flexbox, Grid, Grid Columns, " 1fr ", it{" "}
        <br />
        gets annoying. This should save you some time.
      </p>
      <section id="visual" className={sectionClass}>
        <div>
          <strong>Type: "flex-row" {"->"}</strong>
          <Layout
            type="flex-row"
            className="min-h-24 rounded-md bg-zinc-100 p-4 dark:bg-zinc-900"
          >
            <div className="rounded bg-blue-500 px-4 py-2 text-white">
              Item 1
            </div>
            <div className="rounded bg-blue-500 px-4 py-2 text-white">
              Item 2
            </div>
            <div className="rounded bg-blue-500 px-4 py-2 text-white">
              Item 3
            </div>
          </Layout>
        </div>
        <div>
          <strong>Type: "flex-column" {"->"}</strong>
          <Layout
            type="flex-column"
            className="min-h-48 rounded-md bg-zinc-100 p-4 dark:bg-zinc-900"
          >
            <div className="rounded bg-purple-500 px-4 py-2 text-white">
              Item 1
            </div>
            <div className="rounded bg-purple-500 px-4 py-2 text-white">
              Item 2
            </div>
            <div className="rounded bg-purple-500 px-4 py-2 text-white">
              Item 3
            </div>
          </Layout>
        </div>
        <div>
          <strong>Type: "grid" {"->"}</strong>
          <Layout
            type="grid"
            className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900"
          >
            <div className="rounded bg-emerald-500 px-4 py-6 text-center text-white">
              Item 1
            </div>
            <div className="rounded bg-emerald-500 px-4 py-6 text-center text-white">
              Item 2
            </div>
            <div className="rounded bg-emerald-500 px-4 py-6 text-center text-white">
              Item 3
            </div>
            <div className="rounded bg-emerald-500 px-4 py-6 text-center text-white">
              Item 4
            </div>
          </Layout>
        </div>
        <div>
          <strong>Type: "custom" (no styles by default; you write your own) {"->"}</strong>
          <Layout type="custom">
            <div className="rounded bg-orange-500 px-4 py-6 text-center text-white">
              Item 1
            </div>
            <div className="rounded bg-orange-500 px-4 py-6 text-center text-white">
              Item 2
            </div>
            <div className="rounded bg-orange-500 px-4 py-6 text-center text-white">
              Item 3
            </div>
            <div className="rounded bg-orange-500 px-4 py-6 text-center text-white">
              Item 4
            </div>
          </Layout>
        </div>
      </section>
      <section id="code" className={sectionClass}>
        <strong>Usage: </strong>
        <pre className="rounded-sm p-1.5 bg-zinc-50 dark:bg-zinc-900">
          {`
import Layout from "./layout"; // Change as per where you put your Layout component
export default function MyAwesomeLayout() {
  return <Layout type="grid">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </Layout>
}
`}
        </pre>
      </section>
      <section id="download" className={sectionClass}>
        <Button
          className={x ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () =>
            await copyToClipboard(jsxTailwind, () => sX(true))
          }
        >
          Copy source code (JavaScript + TailwindCSS)
        </Button>
        <Button
          className={x ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () =>
            await copyToClipboard(tsxTailwind, () => sX(true))
          }
        >
          Copy source code (TypeScript + TailwindCSS)
        </Button>
      </section>
      <section id="license-text" className={sectionClass}>
        <h3 className="text-xl font-bold">License Text: </h3>
        <LicenseText />
      </section>
    </div>
  );
}

export default Page;
