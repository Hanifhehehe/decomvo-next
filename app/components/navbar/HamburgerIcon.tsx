'use client'

import { useState } from "react";

interface HamburgerIconProps {
  action?: () => void;
}

function HamburgerIcon({action} : HamburgerIconProps) {
  const [isActive, setIsActive] = useState(false)
  function handleClick() {
    setIsActive(!isActive)
    if (action) {
      action()
    }
  }
  return (
    <div
      className=""
      onClick={handleClick}
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
}

export default HamburgerIcon