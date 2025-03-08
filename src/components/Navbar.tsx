import { useState } from "react";
import lantern from "../assets/lantern.png";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 flex items-center ${
        isHovered ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={lantern} alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Navigation links that appear when hovered */}
        {/* <div
          className={`transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div> */}
      </div>
    </nav>
  );
};
