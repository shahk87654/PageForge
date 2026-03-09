"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./Button";
import { LucideIcon } from "lucide-react";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: ButtonProps["variant"];
  };
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon: Icon, title, description, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center space-y-4 py-12 px-4 text-center",
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon className="h-12 w-12 text-slate-400" />
      )}
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-slate-500">{description}</p>
        )}
      </div>
      {action && (
        <Button onClick={action.onClick} variant={action.variant}>
          {action.label}
        </Button>
      )}
    </div>
  )
);

EmptyState.displayName = "EmptyState";

export { EmptyState };
