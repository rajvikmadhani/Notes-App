import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer
      id="footerContainer"
      className="py-4 bg-gray-800 text-white bg-[url('../src/assets/background.jpg')]"
    >
      {/* Logo and Separator */}
      <div className="my-8 pt-14 text-center">
        <a href="#">
          <img
            src="./src/assets/logo.png"
            alt="My Diary"
            className="mx-auto mb-2"
          />
        </a>
        <SocialIcons />
      </div>

      {/* Footer Links */}
      <div className="mb-8 text-center">
        <ul className="flex flex-wrap justify-center space-x-6">
          <li>
            <Link to="/howtowriteanotes" className="hover:text-gray-400">
              HOW TO WRITE A NOTE |
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-gray-400">
              FAQ |
            </Link>
          </li>
          <li>
            <Link to="/privacypolicy" className="hover:text-gray-400">
              PRIVACY POLICY |
            </Link>
          </li>
          <li>
            <Link to="/cookies" className="hover:text-gray-400">
              COOKIES |
            </Link>
          </li>
          <li>
            <Link to="/termsofuse" className="hover:text-gray-400">
              TERMS OF USE |
            </Link>
          </li>
          <li>
            <Link to="/guide" className="hover:text-gray-400">
              GUIDES
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center text-white text-xs mt-8">
        <p>
          Copyright © 2025{" "}
          <a href="/" className=" hover:text-gray-400">
            WriteNotes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
