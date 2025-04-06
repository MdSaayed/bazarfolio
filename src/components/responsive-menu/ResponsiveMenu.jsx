import { Link } from "react-router-dom";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";
import { useEffect } from "react";


const ResponsiveMenu = ({ isOpen, onClose,menuItems }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div onClick={onClose} className="absolute top-6 right-6 flex gap-2 items-center text-white text-lg font-semibold uppercase">
          <span>close</span> <FiMinus className="text-2xl" />
      </div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
                className="text-lg hover:underline"
                to={item.path}
            >
                {item.name}
            </Link>
        ))}
        <Link
          to="/buy"
          onClick={onClose}
          className="mt-4 border border-white px-6 py-2 hover:bg-white hover:text-black transition"
        >
          BUY NOW
        </Link>

        <div className="flex space-x-4 mt-8 text-xl">
          <Link to="#" target="_blank" rel="noopener noreferrer"><FaFacebookF className="fab fa-facebook-f" /></Link>
          <Link to="#" target="_blank" rel="noopener noreferrer"><FaTwitter className="fab fa-twitter" /></Link>
          <Link to="#" target="_blank" rel="noopener noreferrer"><RiInstagramFill className="fab fa-instagram" /></Link>
          <Link to="#" target="_blank" rel="noopener noreferrer"><TbBrandDribbbleFilled className="fab fa-dribbble" /></Link>
          <Link to="#" target="_blank" rel="noopener noreferrer"><AiOutlineTikTok className="fab fa-tiktok" /></Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
