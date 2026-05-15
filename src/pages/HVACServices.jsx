import ServicePageTemplate from "../components/ServicePageTemplate";
import { SERVICE_PAGES } from "../data/services";

export default function HVACServices() {
  return <ServicePageTemplate data={SERVICE_PAGES.hvac} />;
}
