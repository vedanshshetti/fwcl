"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/app/components";
import { copyToClipboard } from "@/app/stuff";
import LicenseText from "./LicenseText";
import SearchableView, { jsxTailwind, rawCss, tsxTailwind } from "./SearchableView";

const sampleData = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Papaya" },
  { name: "Mango" },
  { name: "Strawberry" },
  { name: "other fruits" },
];

function Page() {
  const sectionClass = "flex flex-col mt-4 gap-4";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 500);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">
        Searchable View - filter a list as you type.
      </h1>
      <span className="my-2 rounded-xl bg-[#812878] px-2 py-1">
        License: <Link href="#license-text">Apache 2.0 (OSI-Approved)</Link>
      </span>
      <p className="text-sm!">
        Searchable View gives any list of objects a simple, case-insensitive
        search field. <br />
        Choose which property to search with the <code>filterOn</code> property.
      </p>
      <section id="visual" className={sectionClass}>
        <SearchableView
          data={sampleData}
          mapCb={(o: { name: string }) => <strong key={o.name}>{o.name}</strong>}
          filterOn="name"
          className="mx-auto"
        />
      </section>
      <section id="code" className={sectionClass}>
        <strong>Usage: </strong>
        <pre className="rounded-sm bg-zinc-50 p-1.5 dark:bg-zinc-900">
          {`
import SearchableView from "./SearchableView"; // Change as needed

const items = [
  { name: "Hamburger", price: 4.59 },
  { name: "French Fries", price: 1.49 },
  { name: "Coca Cola", price: 2.28 },
];

export default function MySearchableView() {
  return <SearchableView 
    data={items}
    filterOn="name"
    mapFn={ (item) => <p>{item.name} - {item.price}</p> }
  />;
}
`}
        </pre>
      </section>
      <section id="vanilla" className={sectionClass}>
        <strong>Vanilla HTML usage (requires extra scripts to actually search):</strong>
        <pre className="rounded-sm bg-zinc-50 p-1.5 dark:bg-zinc-900">
          {`<link rel="stylesheet" href="./searchable-view.css" />

<section class="searchable-view">
  <input
    class="searchable-view__input"
    type="search"
    placeholder="Search items"
    aria-label="Search items"
  />
  <div class="searchable-view__results">
    <p>Apple</p>
    <p>Banana</p>
    <p>Mango</p>
  </div>
</section>`}
        </pre>
      </section>
      <section id="download" className={sectionClass}>
        <Button
          className={copied ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () =>
            await copyToClipboard(jsxTailwind, () => setCopied(true))
          }
        >
          Copy source code (React.js + TailwindCSS)
        </Button>
        <Button
          className={copied ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () =>
            await copyToClipboard(tsxTailwind, () => setCopied(true))
          }
        >
          Copy source code (React.js + TypeScript + TailwindCSS)
        </Button>
        <Button
          className={copied ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () => await copyToClipboard(rawCss, () => setCopied(true))}
        >
          Copy stylesheet (Vanilla CSS)
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
