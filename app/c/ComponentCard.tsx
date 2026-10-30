import Link from "next/link";
import type { ReactNode } from "react";

interface ComponentCardPropertiesInterface {
  name: string;
  demo: ReactNode;
}

function ComponentCard({ name, demo }: ComponentCardPropertiesInterface) {
  return (
    <Link href={`/demo/${name}`}>
      <div className="flex flex-col gap-2 p-4 m-2 bg-slate-200 dark:bg-slate-900 rounded-md">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>A nice, customisable button component.</p>
        {demo}
      </div>
    </Link>
  );
}

export default ComponentCard;
