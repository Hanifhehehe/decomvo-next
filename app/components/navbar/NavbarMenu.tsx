"use client";

import { useState } from "react";
import MenuItem from "./MenuItem";
import HamburgerIcon from "./HamburgerIcon";
import ExitIcon from "./ExitIcon";
import Logo from "../Logo";

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:flex-row md:flex">
        <MenuItem label="Startseite" path="/" />
        <MenuItem label="Über Uns" path="/uber-uns" />
        <MenuItem label="Beiträge" path="/beitrage" />
        <MenuItem label="Projekte" path="/projekte" />
      </div>
      <div className="md:hidden">
        <HamburgerIcon action={() => setIsOpen(!isOpen)} />
        <div
          className={`absolute w-3/4 h-screen shadow-sm bg-white p-10 top-0 transition-all duration-500 ${
            isOpen
              ? 'right-[-747px]'
              : 'right-0'
          }`}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`flex flex-col h-1/2 justify-between transition-all duration-1000 ${
              isOpen
                ? `opacity-0`
                : `opacity-100`
            }`}
          >
            <div className="self-end">
              <ExitIcon />
            </div>
            <Logo />
            <MenuItem label="Startseite" path="/" />
            <MenuItem label="Über Uns" path="/uber-uns" />
            <MenuItem label="Beiträge" path="/beitrage" />
            <MenuItem label="Projekte" path="/projekte" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
