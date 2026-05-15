import { COMPANY } from "../data/site";

const SIZES = {
  nav: "h-12 w-auto max-h-14 sm:h-14 md:h-16 lg:h-[4.5rem]",
  footer: "h-20 w-auto sm:h-24 md:h-28",
  loader: "h-36 w-auto md:h-44",
  hero: "h-28 w-auto sm:h-36 md:h-44",
  about: "h-44 w-auto sm:h-52 md:h-60",
  card: "h-24 w-auto sm:h-28",
};

export default function CompanyLogo({ size = "nav", className = "", onNavy = false }) {
  const img = (
    <img
      src="/logo.png"
      alt={COMPANY.name}
      className={`object-contain object-left ${SIZES[size] || SIZES.nav} ${className}`}
      loading={size === "nav" || size === "loader" ? "eager" : "lazy"}
    />
  );

  if (onNavy) {
    return (
      <div className="inline-flex rounded-2xl bg-navy px-3 py-2 sm:px-5 sm:py-3">{img}</div>
    );
  }

  return img;
}
