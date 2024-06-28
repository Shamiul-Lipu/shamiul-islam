import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaDev,
  FaTwitter,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import bgImage from "../../../assets/blob-scene-haikei.png";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="footer footer-center pt-10 bg-primary  text-textPrimary bg-cover bg-repeat-y pb-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-textSecondary">
        <p className="font-bold">
          Shamiul Islam <br />
        </p>
        {/* Copyright © 2023 - All right reserved */}
        <span className="text-[6px]">portfolio version 0.1</span>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 list-none">
          <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer ">
            <Link target="_blank" to="https://github.com/Shamiul-Lipu">
              <FaGithub className="w-6 h-6" />
            </Link>
          </li>
          <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/shamiul-islam-lipu-7033a7135/"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
          </li>
          <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer">
            <Link target="_blank" to="https://dev.to/shamiul">
              <FaDev className="w-6 h-6" />
            </Link>
          </li>
          <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer">
            <Link target="_blank" to="https://twitter.com/LipuShamiul">
              <FaTwitter className="w-6 h-6" />
            </Link>
          </li>
        </div>
      </div>
      <a
        onClick={handleScrollToTop}
        href="#"
        className="cursor-pointer text-cyan-300 text-xs"
      >
        <FaRegArrowAltCircleUp className="w-6 h-6 animate-bounce" /> Go to top
      </a>
    </footer>
  );
};

export default Footer;
