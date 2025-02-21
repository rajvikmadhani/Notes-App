import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesProvider";
import { useUser } from "../context/UserProvider";
import NoteForm from "../components/NoteForm";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetAppSection from "../components/GetAppSection";

const AddNote = () => {
  const { dispatch } = useNotes();
  const { user } = useUser();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  if (!user) {
    return <p className="text-center text-lg">Login to add a new note.</p>;
  }

  const addNote = (note) => {
    dispatch({ type: "ADD_NOTE", payload: { ...note, id: Date.now() } });
    setMessage("Note added successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
      <GetAppSection />
      {message && <p className="text-green-500 text-center">{message}</p>}
      <h2 className="text-xl font-semibold mb-4">Add a New Note</h2>
      <NoteForm onSubmit={addNote} />
      <Footer />
    </div>
  );
};

export default AddNote;
