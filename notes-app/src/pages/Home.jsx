import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast notifications
import { useNotes } from "../context/NotesProvider";
import { useUser } from "../context/UserProvider";
import NoteList from "../components/NoteList";
import FeatureSection from "../components/FeatureSection";
import ScreensSection from "../components/ScreensSection";
import SupportSection from "../components/SupportSection";
import GetAppSection from "../components/GetAppSection";
import Navbar from "../components/Navbar";

import AuthModal from "../components/AuthModal";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const Home = () => {
  const { notes, dispatch } = useNotes();
  const { user, setUser } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 3;

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [setUser]);

  // Filter notes based on search query (by title or category)
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (note.category &&
        note.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Pagination Logic
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  // Handle note deletion
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
    toast.success("Note deleted successfully!");
  };

  // Handle Pagination
  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <FeatureSection />
      <Reviews />
      <ScreensSection />
      {/* Notes Section */}
      <section id="getStarted" className="container mx-auto py-16 px-4">
        <h2 className=" text-center text-4xl font-bold  text-[#666]">
          Note List
        </h2>
        <div className="w-16 h-1 bg-[#8b0067] mx-auto my-4"></div>

        {user ? (
          <>
            {/* Search Filter */}
            <div className="mb-10 mt-10 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by title or category..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Note List with Pagination */}
            {currentNotes.length > 0 ? (
              <>
                <NoteList notes={currentNotes} onDelete={handleDelete} />

                {/* Pagination Controls */}
                <div className="flex justify-center mt-6 space-x-4">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`py-2 px-4 rounded-md shadow ${
                      currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
                  >
                    Previous
                  </button>
                  <span className="text-lg font-semibold">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`py-2 px-4 rounded-md shadow ${
                      currentPage === totalPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center text-lg">No matching notes found.</p>
            )}
          </>
        ) : (
          <div className="text-center text-lg">
            <p>You need to log in to view your notes.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition"
            >
              Login / Sign Up
            </button>
          </div>
        )}
      </section>
      {/* Add Note Button */}
      {user && (
        <div className="flex justify-center my-8">
          <Link
            to="/add"
            className="bg-green-500 text-white py-3 px-6 rounded-md shadow-lg hover:bg-green-400 transition"
          >
            + Add Note
          </Link>
        </div>
      )}
      <GetAppSection />
      <SupportSection />
      <Footer />
      {/* Authentication Modal */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={setUser}
      />
    </div>
  );
};

export default Home;
