"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full text-sm px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

    const styles =
      variant === "primary"
        ? "bg-[var(--accent)] text-black hover:bg-[#8fd8ff]"
        : "border border-white/10 text-gray-200 hover:bg-white/5";

    return (
      <button
        ref={ref}
        className={twMerge(base, styles, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
