import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { tv, VariantProps } from "tailwind-variants";

import * as utils from "@utils";
import { Loader, Loader2 } from "lucide-react";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
//         destructive:
//           "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
//         outline:
//           "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
//         secondary:
//           "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
//         ghost:
//           "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
//         link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// convert to tailwind variants
const button = tv({
  slots: {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800",
  },
  variants: {
    variant: {
      default: {
        base: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
      },
      destructive: {
        base: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
      },
      outline: {
        base: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
      },
      secondary: {
        base: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
      },
      ghost: {
        base: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
      },
      link: {
        base: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
    },
    size: {
      default: { base: "h-10 px-4 py-2" },
      sm: { base: "h-9 rounded-md px-3" },
      lg: { base: "h-11 rounded-md px-8" },
      icon: { base: "h-10 w-10" },
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    console.log(`variant: ${variant}, size: ${size}`);
    const { base } = button({ variant, size });

    return (
      <Comp
        className={utils.cn(
          base(),
          isLoading && "flex cursor-wait items-center justify-center gap-1"
        )}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <Loader2
            className={utils.cn(`h-4 w-4 animate-spin text-neutral-50`)}
          />
        )}

        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
