import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import NotesProvider from "./context/NotesProvider";
import UserProvider from "./context/UserProvider";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <NotesProvider>
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/add"
                element={
                  <ProtectedRoute>
                    <AddNote />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditNote />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </NotesProvider>
      </UserProvider>

      {/* Global Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
};

export default App;
