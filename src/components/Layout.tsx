import { lazy } from "react";

// Lazy import components
const Header = lazy(() => import("./Header.tsx"));
const Footer = lazy(() => import("./Footer.tsx"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
