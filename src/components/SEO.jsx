import { Helmet } from "react-helmet-async";
import { COMPANY } from "../data/site";

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
}) {
  const fullTitle = title
    ? `${title} | ${COMPANY.name}`
    : `${COMPANY.name} | HVAC & AC Services in Qatar`;
  const desc =
    description ||
    `Professional HVAC, AC repair, VRF systems, and appliance services in ${COMPANY.location}. ${COMPANY.tagline}`;
  const url = `https://altabiaacooling.com${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: COMPANY.name,
    description: desc,
    url,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Birkat Al Awamer",
      addressCountry: "QA",
    },
    areaServed: "Qatar",
    priceRange: "$$",
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_QA" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
