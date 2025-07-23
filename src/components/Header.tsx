import { Link } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { navbarData } from "../lib/navbarData";
import { ArrowLeftStartOnRectangleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Modal = lazy(() => import("./dynamicComponents/Modal.tsx"));
const LogoutModal = lazy(() => import("./modals/LogoutModal.tsx"));
const Button = lazy(() => import("./dynamicComponents/Button.tsx"));

const Header: React.FC = () => {
  const [showName, setShowName] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setShowName(prev => !prev);
  };

  const handleLogOut = () => {
    setIsMobileMenuOpen(false);
    setLogoutPopUp(prev => !prev);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`w-full sticky top-0 left-0 z-50 px-4 lg:px-20 transition-all duration-300 
      ${scrolled ? `bg-white opacity-80 shadow-md ${(isMobileMenuOpen || logoutPopUp) && "!opacity-100"}` : `bg-[#F1E9E5] lg:bg-transparent opacity-100`}`}>
      <nav className="w-full flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-primary text-[22px] leading-[26px] font-syncopate">Makeover</Link>

        <div className="font-semibold text-[18px] leading-6 hidden gap-[60px] text-primary lg:flex">
          {navbarData?.map((item) => (
            <Link key={item.id} to={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        <Button link="/sign-up" className="px-6 py-3 rounded-sm leading-6 font-semibold hidden lg:block" name="Login/Register" />

        <Bars3Icon onClick={toggleMobileMenu} className="text-primary w-6 h-6 cursor-pointer block lg:hidden" />
      </nav>

      {/* Mobile navbar */}
      {isMobileMenuOpen && (
        <Modal
          isOpen={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          parentClassName="backdrop-blur-0"
          className="!fixed !top-14 !right-0 !left-auto !bottom-0 !w-60 !max-w-none !h-[calc(100vh-3.5rem)] !rounded-none !p-0 !m-0 !bg-white !transform !translate-x-0 !rounded-tl-xl"
        >
          <div className="h-full flex flex-col">
            <div className="w-full px-4 py-6 flex items-center justify-between">
              {
                showName && <h2 className="text-xs font-bold text-primary">Priyanshu</h2>
              }
              <XMarkIcon
                onClick={toggleMobileMenu}
                className="w-6 h-6 cursor-pointer hover:text-primary transition-colors"
              />
            </div>

            <div className="flex-1 pt-6">
              {
                navbarData?.map((item, idx) => {
                  const isFirst = idx === 0;
                  const isLast = idx === navbarData?.length - 1;

                  return (
                    <div
                      key={idx}
                      className={`${!isFirst ? "border-t-[0.5px]" : "border-t-[0.5px]"} ${isLast ? "border-b-[0.5px]" : ""} border-navBorderColor py-4 font-semibold text-primary text-sm px-4`}
                    >
                      <Link key={item.id} to={item.href} onClick={toggleMobileMenu}>
                        {item.title}
                      </Link>
                    </div>
                  )
                })
              }
            </div>

            <div className="w-full px-4 py-6 border-[0.5px] border-navBorderColor">
              <Button
                name="Log Out"
                className="!text-primary bg-transparent text-sm font-semibold leading-6 flex flex-row-reverse gap-2"
                icon={<ArrowLeftStartOnRectangleIcon className="w-6 h-6" />}
                onClick={handleLogOut}
              />
            </div>

            <p className="px-4 py-6 w-full flex items-center justify-center font-semibold text-[10px] text-primary">
              Crafted with&nbsp;<span className="text-base">💖</span>&nbsp;in India
            </p>
          </div>
        </Modal>
      )}


      {/* Logout */}
      <Modal 
        isOpen={logoutPopUp} 
        onClose={handleLogOut} 
        parentClassName="!px-4"
        className="!p-4 !bg-white"
        >
        <LogoutModal onClick={handleLogOut} />
      </Modal>
    </header>
  )
}

export default Header;
