/** Shows full client image filling the container width (no side gaps). */
export default function BrandImage({
  src,
  alt,
  variant = "square",
  compact = false,
  flush = false,
  className = "",
}) {
  const frameClass = [
    "brand-img-frame",
    variant === "wide" ? "brand-img-frame--wide" : "brand-img-frame--square",
    compact ? "brand-img-frame--compact" : "",
    flush ? "brand-img-frame--flush" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={frameClass}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
