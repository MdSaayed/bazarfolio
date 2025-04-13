import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";

const ResponsiveMenu = ({ isOpen, onClose, menuItems }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Breakpoint for mobile
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen); // Manage menu state locally

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024;
      setIsMobile(isMobileNow);
      // Close menu when transitioning from mobile to desktop
      if (!isMobileNow && isMenuOpen) {
        setIsMenuOpen(false);
        onClose(); // Close the menu on desktop
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, onClose]);

  useEffect(() => {
    if (isOpen !== isMenuOpen) {
      setIsMenuOpen(isOpen);
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMenuOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-blue-gray text-white overflow-y-scroll transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        onClick={() => {
          setIsMenuOpen(false);
          onClose();
        }}
        className="absolute top-6 right-6 flex gap-2 items-center text-white text-lg font-semibold uppercase"
      >
        <span>close</span> <FiMinus className="text-2xl" />
      </div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {menuItems.map((item, index) => (
          <a
            onClick={() => {
              setIsMenuOpen(false);
              onClose();
            }}
            href={item?.path}
            key={index}
            className="text-lg"
            to={item.path}
          >
            {item.name} 
          </a>
        ))}
        <Link
          to="/buy"
          onClick={() => {
            setIsMenuOpen(false);
            onClose();
          }}
          className="mt-4 border rounded-4xl border-white px-6 py-2 hover:bg-white hover:text-black transition"
        >
          BUY NOW
        </Link>

        <div className="flex space-x-4 mt-8 text-xl">
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="fab fa-facebook-f" />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="fab fa-twitter" />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="fab fa-instagram" />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <TbBrandDribbbleFilled className="fab fa-dribbble" />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <AiOutlineTikTok className="fab fa-tiktok" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
