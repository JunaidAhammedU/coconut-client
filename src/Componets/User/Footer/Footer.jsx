import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
//-------------------------------------------------------

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-5 text-base-content rounded mt-24">
        <nav>
          <div className="grid grid-flow-col gap-5">
            <FaXTwitter className="text-xl cursor-pointer hover:text-[#1D9BF0] transition duration-300" />
            <FaYoutube className="text-xl mcursor-pointer hover:text-red-600 transition duration-300" />
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-700 transition duration-300" />
            <RiInstagramFill className="text-xl cursor-pointer hover:text-rose-600 transition duration-300" />
            <IoLogoWhatsapp className="text-xl cursor-pointer hover:text-lime-700 transition duration-300" />
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <span className="font-bold hover:text-orange-600">
              <Link to={"/"}>coconut.</Link>
            </span>{" "}
            Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
