"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type ImageWithFallbackProps = Omit<ImageProps, "onError" | "src"> & {
  src: string;
  fallbackLabel?: string;
};

export default function ImageWithFallback({
  src,
  fallbackLabel = "Agregar foto aquí",
  alt,
  className,
  fill,
  ...rest
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={typeof alt === "string" && alt ? alt : fallbackLabel}
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-pme-violet/30 bg-pme-lavender text-center ${fill ? "absolute inset-0" : ""} ${className ?? ""}`}
      >
        <svg
          aria-hidden="true"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="text-pme-violet/60"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="10" r="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 17l4.5-4.5a2 2 0 0 1 2.8 0L15 15.2M14 14.2l1.2-1.2a2 2 0 0 1 2.8 0L21 15.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="px-4 text-sm font-medium text-pme-blue-dark/70">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      onError={() => setErrored(true)}
      {...rest}
    />
  );
}
