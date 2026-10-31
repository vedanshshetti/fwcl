import Link from "next/link";
import type { ReactNode } from "react";

interface ComponentCardPropertiesInterface {
  name: string;
  desc: string;
  demo: ReactNode;
  href: string;
}

function ComponentCard({
  name,
  desc,
  demo,
  href,
}: ComponentCardPropertiesInterface) {
  return (
    <article className="m-2 flex flex-col gap-2 rounded-md bg-slate-200 p-4 dark:bg-slate-900">
      <Link href={href} className="text-xl font-semibold">
        {name}
      </Link>
      <p>{desc}</p>
      {demo}
    </article>
  );
}

export default ComponentCard;
