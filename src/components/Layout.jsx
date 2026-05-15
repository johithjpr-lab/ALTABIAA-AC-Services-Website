import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import MouseGlow from "./MouseGlow";
import LoadingScreen from "./LoadingScreen";
import WhatsAppButton from "./WhatsAppButton";
import StickyCallButton from "./StickyCallButton";

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <LoadingScreen loading={loading} />
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main className="page-enter main-content w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCallButton />
    </>
  );
}
