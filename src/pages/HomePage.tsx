import { lazy, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Layout = lazy(() => import("../components/Layout.tsx"));
const Gallery = lazy(() => import("../components/Gallery.tsx"));
const ContactUs = lazy(() => import("../components/ContactUs.tsx"));
const HeroAbout = lazy(() => import("../components/HeroAbout.tsx"));
const HeroSection = lazy(() => import("../components/HeroSection.tsx"));
const ClientsInfo = lazy(() => import("../components/ClientsInfo.tsx"));
const CustomerTestimony = lazy(() => import("../components/CustomerTestimony.tsx"));
// const Update= lazy(()=> import("../Components/Update"))

const HomePage: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const getStartedRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      <HeroSection />
      <HeroAbout />
      <ClientsInfo />
      <Gallery
        ref={galleryRef}
        aboutRef={aboutRef}
        getStartedRef={getStartedRef}
      />
      <CustomerTestimony />
      <ContactUs />
      {/* <Update/> */}
    </Layout>
  );
};

export default HomePage;