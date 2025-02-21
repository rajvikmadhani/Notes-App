import React, { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <header className="relative bg-blue-600 text-white">
      {/* Navigation Bar */}
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        <img src={logo} alt="Logo" className="h-12" />

        <ul className="flex space-x-6 text-lg">
          {["About", "Features", "Reviews", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:underline transition"
              >
                {item}
              </a>
            </li>
          ))}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition"
            >
              Login
            </button>
          )}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto text-center py-20">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold leading-tight">
            <b>Note</b> - Private Writing
          </h1>
          <div className="mt-6 space-x-4 item-left">
            <a
              href="#about"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Learn More
            </a>
            <a
              href="#getapp"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </header>
  );
};

export default Navbar;
