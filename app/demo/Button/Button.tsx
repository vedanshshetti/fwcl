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
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import l from "@/app/licenses/MIT";

type Variant = "default" | "colourful-and-fun" | "destructive";

interface ButtonPropertiesInterface extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant: Variant;
  animateTransition?: boolean;
}

const variantRecords: Record<Variant, string> = {
  default:
    "p-1 rounded-md border hover:px-2 hover:rounded-lg bg-zinc-50 dark:bg-zinc-900 transition-discrete duration-300",
  destructive:
    "p-1 rounded-md border hover:px-2.5 hover:rounded-lg bg-red-600 transition-discrete duration-300",
  "colourful-and-fun":
    "p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-md transition-all duration-300 bg-linear-15 from-pink-500/90 from-10% to-cyan-700/90 to-70% text-gray-900 dark:text-white font-medium",
};

function Button({ variant, className, ...props }: ButtonPropertiesInterface) {
  const variantClass = variantRecords[variant];

  // Simple, clean, and respects the user's intent
  const finalClassName = `${variantClass} ${className ?? ""}`;

  return (
    <button
      className={finalClassName.trim()} // trim() removes extra spaces if className is empty
      aria-disabled={props["aria-disabled"] ?? props.disabled ?? false}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;

export const tsxTailwind = `
/**${l.trimEnd()}*/
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant = "default" | "colourful-and-fun" | "destructive";

interface ButtonPropertiesInterface extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant: Variant;
  animateTransition?: boolean;
}

const variantRecords: Record<Variant, string> = {
  default:
    "p-1 rounded-md border hover:px-2 hover:rounded-lg bg-zinc-50 dark:bg-zinc-900 transition-discrete duration-300",
  destructive:
    "p-1 rounded-md border hover:px-2 hover:rounded-lg bg-red-600 transition-discrete duration-300",
  "colourful-and-fun":
    "p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-md transition-all duration-300 bg-linear-15 from-pink-500/90 from-10% to-cyan-700/90 to-70% text-gray-900 dark:text-white font-medium",
};

function Button({ variant, className, ...props }: ButtonPropertiesInterface) {
  const variantClass = variantRecords[variant];

  // Simple, clean, and respects the user's intent
  const finalClassName = \`\${variantClass} \${className ?? ""}\`;

  return (
    <button
      className={finalClassName.trim()} // trim() removes extra spaces if className is empty
      aria-disabled={props["aria-disabled"] ?? props.disabled ?? false}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;` as const;

export const jsxTailwind = `
/**${l.trimEnd()}*/

const variantRecords = {
  default:
    "p-1 rounded-md border hover:px-2 hover:rounded-lg bg-zinc-50 dark:bg-zinc-900 transition-discrete duration-300",
  destructive:
    "p-1 rounded-md border hover:px-2 hover:rounded-lg bg-red-600 transition-discrete duration-300",
  "colourful-and-fun":
    "p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-md transition-all duration-300 bg-linear-15 from-pink-500/90 from-10% to-cyan-700/90 to-70% text-gray-900 dark:text-white font-medium",
};

function Button({ variant, className, ...props }) {
  const variantClass = variantRecords[variant];

  // Simple, clean, and respects the user's intent
  const finalClassName = \`\${variantClass} \${className ?? ""}\`;

  return (
    <button
      className={finalClassName.trim()} // trim() removes extra spaces if className is empty
      aria-disabled={props["aria-disabled"] ?? props.disabled ?? false}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;` as const;

export const vanillaCSS = `
/*${l}*/
.button-default {
  padding: 0.25rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  background-color: #fafafa;
  transition-property: all;
  transition-duration: 300ms;
  transition-behavior: allow-discrete;
}

.button-default:hover {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
}

.button-destructive {
  padding: 0.25rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  background-color: #dc2626;
  transition-property: all;
  transition-duration: 300ms;
  transition-behavior: allow-discrete;
}

.button-destructive:hover {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
}

.button-cf {
  padding: 0.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e7eb;
  background-image: linear-gradient(
    15deg,
    rgba(236, 72, 153, 0.9) 10%,
    rgba(14, 116, 144, 0.9) 70% 
  );
  color: #111827; 
  font-weight: 500;
  transition-property: all;
  transition-duration: 300ms;
}

.button-cf:hover {
  border-color: transparent;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .button-cf {
    border-color: #374151;
    color: #ffffff;
  }
  .button-default {
    background-color: #18181b;
  }
}`