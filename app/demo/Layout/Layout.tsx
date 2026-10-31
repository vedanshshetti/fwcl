/**
 * Copyright 2026 Vedansh Shetti <vedansh.shetti@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import l from "@/app/licenses/MIT";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type LayoutTypePropertyType = "flex-row" | "flex-column" | "grid" | "custom";

interface LayoutPropertiesInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: LayoutTypePropertyType;
}

const layoutTypeRecords: Record<LayoutTypePropertyType, string> = {
  custom: "",
  "flex-row": "flex flex-row justify-center items-center gap-2",
  "flex-column": "flex flex-col justify-center items-center gap-2",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr",
};

const Layout = ({ type, className, ...props }: LayoutPropertiesInterface) => (
  <div
    className={`${layoutTypeRecords[type]} ${className ?? ""}`.trim()}
    {...props}
  >
    {props.children}
  </div>
);

export default Layout;

export const tsxTailwind = `
/**${l.trimEnd()}*/

import type { DetailedHTMLProps, HTMLAttributes } from "react";

type LayoutTypePropertyType = "flex-row" | "flex-column" | "grid" | "custom";

interface LayoutPropertiesInterface extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  type: LayoutTypePropertyType;
}

const layoutTypeRecords: Record<LayoutTypePropertyType, string> = {
  custom: "",
  "flex-row": "flex flex-row justify-center items-center gap-2",
  "flex-column": "flex flex-col justify-center items-center gap-2",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr",
};

const Layout = ({ type, className, ...props }: LayoutPropertiesInterface) => (
  <div
    className={\`\${layoutTypeRecords[type]} \${className ?? ""}\`.trim()}
    {...props}
  >
    {props.children}
  </div>
);

export default Layout;` as const;

export const jsxTailwind = `
/**${l.trimEnd()}*/

const layoutTypeRecords = {
  custom: "",
  "flex-row": "flex flex-row justify-center items-center gap-2",
  "flex-column": "flex flex-col justify-center items-center gap-2",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr",
};

const Layout = ({ type, className, ...props }) => (
  <div
    className={\`\${layoutTypeRecords[type]} \${className ?? ""}\`.trim()}
    {...props}
  >
    {props.children}
  </div>
);

export default Layout;` as const;
