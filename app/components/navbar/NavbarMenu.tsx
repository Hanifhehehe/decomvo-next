'use client'
import { useState } from "react";
import MenuItem from "./MenuItem";

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="hidden md:flex-row md:flex">
        <MenuItem label="Startseite" path="/" />
        <MenuItem label="Über Uns" path="/uber-uns" />
        <MenuItem label="Beiträge" path="/beitrage" />
        <MenuItem label="Projekte" path="/projekte" />
      </div>
      <div className="bg-pink visible md:hidden">
        <button
          className="text-gray-800 hover:text-gray-900 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 top-0 left-0 w-full flex flex-col bg-gray-100 py-2">
            <MenuItem label="Startseite" path="/" />
            <MenuItem label="Über Uns" path="/uber-uns" />
            <MenuItem label="Beiträge" path="/beitrage" />
            <MenuItem label="Projekte" path="/projekte" />{" "}
            <button
              className="text-gray-800 hover:text-gray-900 focus:text-gray-900"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20zM8 14a4 4 0 0 0 0-8 4 4 0 0 0 0 8z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarMenu;
