// file: src/components/ui/avatar.tsx
import type * as React from "react";

// --- Main Avatar Container ---
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

// --- Avatar Image ---
interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <img
      className={`aspect-square h-full w-full object-cover ${className || ""}`}
      {...props}
    />
  );
}

// --- Avatar Fallback (for loading/error states) ---
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
  delayMs?: number; // Optional delay for skeleton/placeholder effects
}

export function AvatarFallback({
  className,
  delayMs = 0,
  children,
  ...props
}: AvatarFallbackProps) {
  return (
    <span
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className || ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
      {...props}
    >
      {children}
    </span>
  );
}