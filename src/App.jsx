import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ACServices from "./pages/ACServices";
import HVACServices from "./pages/HVACServices";
import VRFSystems from "./pages/VRFSystems";
import ApplianceServices from "./pages/ApplianceServices";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ac-services" element={<ACServices />} />
            <Route path="hvac-services" element={<HVACServices />} />
            <Route path="vrf-vrv-systems" element={<VRFSystems />} />
            <Route path="appliance-services" element={<ApplianceServices />} />
            <Route path="brands" element={<Brands />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
