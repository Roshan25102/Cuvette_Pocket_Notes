import React, { useEffect, useRef } from "react";

const NoteList = ({ notes }) => {
  const noteListRef = useRef(null);

  useEffect(() => {
    if (noteListRef.current) {
      noteListRef.current.scrollTop = noteListRef.current.scrollHeight;
    }
  }, [notes]);

  const formatDate = (date) => {
    // Split the input date string by '/'
    const [day, month, year] = date.split("/").map(Number);
 
    // Create a new Date object using the parsed values
    const parsedDate = new Date(year, month - 1, day); // month - 1 because months are zero-indexed in JS
 
    // Format the date
    const formattedDate = parsedDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
 
    return ` ${formattedDate}`;
  };

  const formatTime = (time) => {
    let date;
    if (isNaN(Date.parse(time))) {
      date = new Date(); // Set default date if time is invalid
    } else {
      date = new Date(time);
    }
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return ` ${formattedTime}`;
  };

  return (
    <div
      ref={noteListRef}
      className="h-3/5 mt-10 p-10 overflow-scroll space-y-10 custom-scrollbar"
    >
      {notes.map((note, index) => (
        <div key={index} className="flex space-x-10 w-full">
          <div className="flex flex-col space-y-1 font-bold text-black ">
            <span>{formatTime(note.time)}</span>
            <span>{formatDate(note.date)}</span>
          </div>
          <p className="pl-auto break-words flex-1 min-w-0">{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
