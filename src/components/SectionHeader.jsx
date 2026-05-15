export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "left"
      ? "text-left"
      : "mx-auto max-w-3xl text-center";

  return (
    <div className={`${alignClass} ${className}`.trim()} data-aos="fade-up">
      {label && (
        <span className="text-xs font-semibold tracking-widest text-sky uppercase sm:text-sm">
          {label}
        </span>
      )}
      {title && <h2 className="section-heading mt-2">{title}</h2>}
      {description && (
        <p className={`section-sub mt-3 sm:mt-4 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
