"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/app/components";
import { copyToClipboard } from "@/app/stuff";
import LicenseText from "./LicenseText";
import Progress, { jsxTailwind, rawCss, tsxTailwind } from "./Progress";

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
      <h1 className="text-3xl font-semibold">Progress - A nice touch.</h1>
      <span className="rounded-xl px-2 py-1 my-2 bg-[#8b959e]">
        License: <Link href={"#license-text"}>MIT (OSI-Approved)</Link>
      </span>
      <p className="text-sm!">
        Ok, to be honest, you don't need this. You can build your own progress
        bar. You can <br />
        find something better. But please style it, I mean, the default progress
        bar is <br />
        JUST UGLY. <br />
        Or, you can use this one for free ❤️ <br />
      </p>
      <section id="visual" className={sectionClass}>
        <div className="flex">
          <strong>Style Variant: "none" {"->"}</strong>{" "}
          <Progress styleVariant="none" value={16} max={100} />{" "}
        </div>
        <div className="flex">
          <strong>Style Variant: "polished" {"->"}</strong>{" "}
          <Progress
            className="mt-4"
            styleVariant="polished"
            value={24}
            max={100}
          />{" "}
        </div>
      </section>
      <section id="code" className={sectionClass}>
        <strong>Usage: </strong>
        <pre className="rounded-sm p-1.5 bg-zinc-50 dark:bg-zinc-900">
          {`
import Progress from "./progress"; // Change as per where you put your Progress component
export default function MyProgressBar() {
  return <Progress value={41} max={100} styleVariant="polished"/>
}
`}
        </pre>
      </section>
      <section id="vanilla" className={sectionClass}>
        <strong>Vanilla HTML usage:</strong>
        <pre className="rounded-sm p-1.5 bg-zinc-50 dark:bg-zinc-900">
          {`<link rel="stylesheet" href="./progress.css" />

<progress class="progress-polished" value="41" max="100">
  41%
</progress>`}
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
          Copy source code (React.js + TailwindCSS)
        </Button>
        <Button
          className={x ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () =>
            await copyToClipboard(tsxTailwind, () => sX(true))
          }
        >
          Copy source code (React.js + TypeScript + TailwindCSS)
        </Button>
        <Button
          className={x ? "p-3" : ""}
          variant="colourful-and-fun"
          onClick={async () => await copyToClipboard(rawCss, () => sX(true))}
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
