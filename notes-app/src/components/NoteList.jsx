import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const NoteList = ({ notes, onDelete }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const descriptionLimit = 100; // Set character limit for preview

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          navigate={navigate}
          descriptionLimit={descriptionLimit}
          user={user}
        />
      ))}
    </div>
  );
};

const NoteCard = ({ note, onDelete, navigate, descriptionLimit, user }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {/* Render note image if available */}
      {note.image && (
        <img
          src={note.image}
          alt="Note"
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}

      <h2 className="font-semibold text-xl mb-2">{note.title}</h2>

      {/* Render category if available */}
      {note.category && (
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-2">
          {note.category}
        </span>
      )}

      {/* Note Content with "Read More" Option */}
      <p className="text-gray-600">
        {isExpanded ? note.content : note.content.slice(0, descriptionLimit)}
        {note.content.length > descriptionLimit && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:underline ml-2"
          >
            {isExpanded ? "Read Less" : "...Read More"}
          </button>
        )}
      </p>

      {/* Show Edit & Delete Buttons for Logged-in User */}
      {user && (
        <div className="mt-4 flex justify-between">
          <button
            className="text-blue-600 hover:text-blue-500"
            onClick={() => navigate(`/edit/${note.id}`)}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:text-red-500"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteList;
