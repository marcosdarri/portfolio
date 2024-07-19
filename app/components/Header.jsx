"use client";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <header className="navbar bg-base-100 flex justify-between dark:text-white dark:bg-teal-900">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};

export default Header;
