"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, helperText, ...props }, ref) => (
    <div className="w-full">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:shadow-[0_0_20px_rgba(99,102,241,0.3)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          error && "border-rose-500 focus:ring-rose-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {helperText && (
        <p className={cn("mt-1 text-xs", error ? "text-rose-600" : "text-slate-500")}>
          {helperText}
        </p>
      )}
    </div>
  )
);

Input.displayName = "Input";

export { Input };
