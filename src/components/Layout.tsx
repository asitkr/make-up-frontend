import { lazy } from "react";
import type { LayoutProps } from "../types/layout.ts";

// Lazy import components
const Header = lazy(() => import("./Header.tsx"));
const Footer = lazy(() => import("./Footer.tsx"));

const Layout: React.FC<LayoutProps> = ({ children, user  }) => {

  console.log(user);
  
  return (
    <div className="w-full">
      <Header user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
