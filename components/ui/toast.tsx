"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = "info", duration = 5000, onClose }: ToastProps) {
  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg animate-in slide-in-from-bottom-5",
        type === "success" && "bg-card border-accent/20 text-foreground",
        type === "error" && "bg-card border-red-500/20 text-foreground",
        type === "info" && "bg-card border-border text-foreground"
      )}
      role="alert"
    >
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ToastContainer({ children }: { children: React.ReactNode }) {
  return <div className="fixed bottom-4 right-4 z-50 space-y-2">{children}</div>;
}

