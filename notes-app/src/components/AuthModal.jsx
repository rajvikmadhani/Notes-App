import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Handle Signup
      if (!name || !email || !password) {
        alert("Please fill all fields!");
        return;
      }
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.find((user) => user.email === email)) {
        alert("User already exists!");
        return;
      }
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please log in.");
      setIsSignup(false);
    } else {
      // Handle Login
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) {
        alert("Invalid credentials!");
        return;
      }
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      onLogin(user);
      onClose();
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleAuth}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded mb-3"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded mb-3"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="mt-3 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login here" : "Sign up here"}
          </span>
        </p>
        <button
          className="mt-4 w-full p-2 bg-gray-300 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default AuthModal;
