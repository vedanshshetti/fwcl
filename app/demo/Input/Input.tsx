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

import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import l from "@/app/licenses/MIT";

interface InputPropertiesInterface extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  styleVariant?: "none" | "polished";
}

const svMap: Record<"none" | "polished", string> = {
  none: "",
  polished:
    "p-1 border-b text-black dark:text-white outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
};

function Input({ styleVariant = "none", ...props }: InputPropertiesInterface) {
  const finalClass = `${svMap[styleVariant]} ${props.className ?? ""}`;
  return (
    <input className={finalClass} placeholder={props.placeholder ?? "Default Placeholder"} type={props.type ?? "text"} {...props} />
  );
}

export default Input;

export const tsxTailwind = `
/**${l.trimEnd()}*/

import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputPropertiesInterface extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  styleVariant?: "none" | "polished";
}

const svMap: Record<"none" | "polished", string> = {
  none: "",
  polished:
    "p-1 border-b text-black dark:text-white outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
};

function Input({ styleVariant = "none", ...props }: InputPropertiesInterface) {
  const finalClass = \`\${svMap[styleVariant]} \${props.className ?? ""}\`;
  return (
    <input className={finalClass} placeholder={props.placeholder ?? "Default Placeholder"} type={props.type ?? "text"} {...props} />
  );
}

export default Input;` as const;

export const jsxTailwind = `
/**${l.trimEnd()}*/

const svMap = {
  none: "",
  polished:
    "p-1 border-b text-black dark:text-white outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
};

function Input({ styleVariant = "none", ...props }) {
  const finalClass = \`\${svMap[styleVariant]} \${props.className ?? ""}\`;
  return (
    <input className={finalClass} placeholder={props.placeholder ?? "Default Placeholder"} type={props.type ?? "text"} {...props} />
  );
}

export default Input;` as const;

export const rawCss = `
/**${l.trimEnd()}*/

.input-polished {
  padding: 0.25rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  color: #000000; /* black */
  outline: none;
  border-radius: 0.125rem; /* rounded-sm */
}

@media (prefers-color-scheme: dark) {
  .input-polished {
    color: #ffffff; /* white */
  }
}

.input-polished:focus-visible {
  outline: 2px solid #3b82f6; /* blue-500 */
  outline-offset: 0.5rem; /* ring-offset-2 = 0.5rem */
  border-radius: 0.125rem; /* Re-apply radius to prevent outline clipping */
}` as const;
