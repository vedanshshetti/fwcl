"use client";
import Link from "next/link";
import { Button } from "@/app/components";
import { copyToClipboard } from "@/app/stuff";
import { tsxTailwind } from "./Button";
import LicenseText from "./LicenseText";

function page() {
  const sectionClass = "flex flex-col mt-4 gap-4";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold">
        Button - a simple but customisable button component.
      </h1>
      <span className="rounded-xl px-2 py-1 my-2 bg-green-700">License: <Link href={"#license-text"}>MIT (OSI-Approved)</Link></span>
      <p className="text-sm!">
        The average button, while a simple thing, is a key component to building
        interactive web pages. <br />
        In this world, a clean UI is just as important as functionality. Hence
        the <strong>Button Component</strong>.
      </p>
      <section id="visual" className={sectionClass}>
        <div>
          <strong className="mt-2">Variant: "default" {"->"}</strong>{" "}
          <Button variant="default">Demo of Default Variant</Button>{" "}
        </div>
        <div>
          <strong className="mt-2">Variant: "colourful-and-fun" {"->"}</strong>{" "}
          <Button variant="colourful-and-fun">Demo of C&F Variant</Button>
        </div>
      </section>
      <section id="code" className={sectionClass}>
        <strong>Usage: </strong>
        <pre className="rounded-sm p-1.5 bg-zinc-50 dark:bg-zinc-900">
          {`
import Button from "./button"; // Change as per where you put your Button component
export default function MyAwesomeButton() {
  return <Button variant="default">My Awesome Button</Button>
}
`}
        </pre>
      </section>
      <section id="download" className={sectionClass}>
            <Button variant="colourful-and-fun" onClick={async () => await copyToClipboard(tsxTailwind)}>Copy source code (TypeScript + TailwindCSS)</Button>
      </section>
      <section id="license-text" className={sectionClass}>
        <h3 className="text-xl font-bold">License Text: </h3>
        <LicenseText/>
      </section>
    </div>
  );
}

export default page;
