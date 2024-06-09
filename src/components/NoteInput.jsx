import React, { useState } from "react";

const NoteInput = ({ addNote, group }) => {
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim() === "") return;
    const date = new Date();
    const newNote = {
      text: noteText,
      group,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    addNote(newNote);
    setNoteText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents new line in textarea
      handleAddNote();
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-3/4 h-1/4 bg-grayShade p-5">
      <div className="relative  h-full w-full">
        <textarea
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your note here..."
          className="h-full w-full p-2 pr-10 border rounded-lg"
          style={{ resize: "none" }} // Optional: Disable resizing of textarea
          wrap="soft"
        />
        <button
          className="absolute bottom-2 right-2  text-grayshade rounded p-2 text-3xl"
          onClick={handleAddNote}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default NoteInput;
