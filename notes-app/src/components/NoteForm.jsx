import { useState } from "react";
import { useUser } from "../context/UserProvider";

const NoteForm = ({ onSubmit, initialData }) => {
  const { user } = useUser(); // Check if user is logged in
  const [note, setNote] = useState(
    initialData || { title: "", content: "", category: "General", image: "" }
  );
  const [error, setError] = useState("");

  const categories = ["Work", "Personal", "Ideas", "General"];

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNote({ ...note, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) {
      setError("Title and Content cannot be empty.");
      return;
    }
    setError("");
    onSubmit(note);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300"
        required
      />

      <textarea
        name="content"
        placeholder="Content"
        value={note.content}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300"
        required
      />

      <select
        name="category"
        value={note.category}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Image Upload Field */}
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {note.image && (
        <img
          src={note.image}
          alt="Preview"
          className="w-full h-40 object-cover rounded-md mt-2"
        />
      )}

      {user ? (
        <button type="submit" className="w-full p-2 bg-blue-600 text-white">
          Save Note
        </button>
      ) : (
        <p className="text-gray-600 text-center">Login to add or edit notes.</p>
      )}
    </form>
  );
};

export default NoteForm;
