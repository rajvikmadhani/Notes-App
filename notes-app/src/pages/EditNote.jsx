import { useParams, useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { useNotes } from "../context/NotesProvider";
import { useUser } from "../context/UserProvider";
import { useState } from "react";
import GetAppSection from "../components/GetAppSection";
import Footer from "../components/Footer";

const EditNote = () => {
  const { id } = useParams();
  const { notes, dispatch } = useNotes();
  const { user } = useUser();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  if (!user) {
    return <p className="text-center text-lg mt-10">Login to edit notes.</p>;
  }

  const noteToEdit = notes?.find((note) => note.id === Number(id)); // Convert id to number

  if (!noteToEdit) {
    return <p className="text-center text-lg mt-10">Note not found.</p>;
  }

  const updateNote = (updatedNote) => {
    dispatch({ type: "UPDATE_NOTE", payload: updatedNote });
    setMessage("Note updated successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
      <GetAppSection />
      {message && <p className="text-green-500 text-center">{message}</p>}
      <h2 className="text-2xl font-semibold mb-4 text-center">Edit Note</h2>
      <NoteForm onSubmit={updateNote} initialData={noteToEdit} />
      <Footer />
    </div>
  );
};

export default EditNote;
