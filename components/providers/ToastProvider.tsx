"use client";

import React from "react";
import { Toaster } from "sonner";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        theme="dark"
        position="top-right"
        expand={true}
        richColors
        visibleToasts={3}
      />
    </>
  );
}
