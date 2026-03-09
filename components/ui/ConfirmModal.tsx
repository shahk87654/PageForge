"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { AlertTriangle } from "lucide-react";

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  danger?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDangerous?: boolean;
}

const ConfirmModal = React.forwardRef<HTMLDivElement, ConfirmModalProps>(
  (
    {
      isOpen,
      title,
      description,
      danger = false,
      confirmText = "Confirm",
      cancelText = "Cancel",
      onConfirm,
      onCancel,
      isDangerous = false,
    },
    ref
  ) => {
    const [canConfirm, setCanConfirm] = React.useState(!isDangerous);

    React.useEffect(() => {
      if (isOpen && isDangerous) {
        setCanConfirm(false);
        const timer = setTimeout(() => setCanConfirm(true), 2000);
        return () => clearTimeout(timer);
      } else {
        setCanConfirm(true);
      }
    }, [isOpen, isDangerous]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div
          ref={ref}
          className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-lg"
        >
          <div className="flex items-start space-x-4">
            {danger && (
              <AlertTriangle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
              {description && (
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              )}
              {isDangerous && !canConfirm && (
                <p className="mt-2 text-xs text-rose-600">
                  Please wait 2 seconds before confirming...
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="ghost" onClick={onCancel}>
              {cancelText}
            </Button>
            <Button
              variant={danger ? "danger" : "default"}
              onClick={onConfirm}
              disabled={!canConfirm}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ConfirmModal.displayName = "ConfirmModal";

export { ConfirmModal };
