import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant = "default" | "colourful-and-fun";

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
  "colourful-and-fun":
    "p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-md transition-all duration-300 bg-linear-15 from-pink-500/90 from-10% to-cyan-700/90 to-70% text-gray-900 dark:text-white font-medium",
};

function Button({ variant, ...props }: ButtonPropertiesInterface) {
  const userClass = props.className ?? "";
  const variantClass = variantRecords[variant];
  return (
    <button
      className={`${variantClass} ${userClass}`}
      aria-disabled={props["aria-disabled"] ?? props.disabled ?? false}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;

export const tsxTailwind = `
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant = "default" | "colourful-and-fun";

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
  "colourful-and-fun":
    "p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-md transition-all duration-300 bg-linear-15 from-pink-500/90 from-10% to-cyan-700/90 to-70% text-gray-900 dark:text-white font-medium",
};

function Button({ variant, ...props }: ButtonPropertiesInterface) {
  const userClass = props.className ?? "";
  const variantClass = variantRecords[variant];
  return (
    <button
      className={\`\${variantClass} \${userClass}\`}
      aria-disabled={props["aria-disabled"] ?? props.disabled ?? false}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;` as const;
