import { useState } from "react";

export default function BrandLogo({ brand, className = "" }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className={`text-center text-sm font-bold text-white/90 sm:text-base ${className}`}>
        {brand.name}
      </span>
    );
  }

  return (
    <img
      src={brand.logo}
      alt={`${brand.name} logo`}
      className={`max-h-10 w-auto max-w-[120px] object-contain opacity-90 transition-opacity group-hover:opacity-100 sm:max-h-12 sm:max-w-[140px] ${className}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}
