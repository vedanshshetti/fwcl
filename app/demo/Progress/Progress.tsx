/**
 Copyright 2026 Vedansh Shetti <vedansh.shetti@gmail.com>

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

import type { DetailedHTMLProps, ProgressHTMLAttributes } from "react";
import l from "@/app/licenses/MIT";

interface ProgressInterface extends DetailedHTMLProps<
  ProgressHTMLAttributes<HTMLProgressElement>,
  HTMLProgressElement
> {
  styleVariant: "polished" | "none";
}

function Progress({ styleVariant, ...props }: ProgressInterface) {
  const styleClasses = 
    `${props.className ?? ""} ${
      styleVariant === "polished" ?
        "w-full h-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-900 [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-moz-progress-bar]:rounded-xl"
        : ""}`;
  return <progress {...props} className={styleClasses}></progress>;
}

export default Progress;

export const tsxTailwind = `
/**${l.trimEnd()}*/

import type { DetailedHTMLProps, ProgressHTMLAttributes } from "react";

interface ProgressInterface extends DetailedHTMLProps<
  ProgressHTMLAttributes<HTMLProgressElement>,
  HTMLProgressElement
> {
  styleVariant: "polished" | "none";
}

function Progress({ styleVariant, ...props }: ProgressInterface) {
  const styleClasses = 
    \`\${props.className ?? ""} \${
      styleVariant === "polished" ?
        "w-full h-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-moz-progress-bar]:rounded-xl"
        : ""}\`;
  return <progress {...props} className={styleClasses}></progress>;
}

export default Progress;` as const;

export const jsxTailwind = `
/**${l.trimEnd()}*/

function Progress({ styleVariant, ...props }) {
  const styleClasses = 
    \`\${props.className ?? ""} \${
      styleVariant === "polished" ?
        "w-full h-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-moz-progress-bar]:rounded-xl"
        : ""}\`;
  return <progress {...props} className={styleClasses}></progress>;
}

export default Progress;` as const;

export const rawCss = `
/**${l.trimEnd()}*/

.progress-polished {
  width: 100%;
  height: 1rem;
  border: 0;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #e5e7eb;
}

.progress-polished::-webkit-progress-bar {
  border-radius: 0.75rem;
  background-color: #e5e7eb;
}

.progress-polished::-webkit-progress-value,
.progress-polished::-moz-progress-bar {
  border-radius: 0.75rem;
}

@media (prefers-color-scheme: dark) {
  .progress-polished,
  .progress-polished::-webkit-progress-bar {
    background-color: #111827;
  }
}` as const;
