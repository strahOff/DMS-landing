import { useState, useCallback } from "react";
import NavTrigger from "./components/NavTrigger";
import NavMenu from "./components/NavMenu";
import { useClickOutside } from "./hook/useClickOutside";

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = useCallback(() => setIsOpen(false), []);
  const containerRef = useClickOutside(handleClickOutside);

  // const handleItemClick = () => setIsOpen(false);

  return (
    <div
      ref={containerRef}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start"
    >
      <NavTrigger
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="main-nav-menu"
      />
      <NavMenu id="main-nav-menu" isOpen={isOpen} />
    </div>
  );
};
