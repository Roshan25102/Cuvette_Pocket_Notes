import React, { useState, useEffect, useRef } from "react";

const colors = [
  "lavender",
  "pink",
  "skyblue",
  "coral",
  "ultramarine",
  "periwinkle",
];

const GroupPopup = ({ addGroup, setShowGroupPopup }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState(colors[0]);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowGroupPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setShowGroupPopup]);

  const handleAddGroup = () => {
    addGroup({ name: groupName, color: groupColor });
    setGroupName("");
    setShowGroupPopup(false);
  };

  return (
    <div
      ref={popupRef}
      className="relative bg-white rounded-lg p-10 text-3xl w-3/6 h-2/5"
    >
      <h2 className="font-bold pb-5">Create New Notes group</h2>
      <div className="flex p-3">
        <h2 className="pr-5">Group Name</h2>
        <input
          className="border border-black rounded-full text-2xl w-2/3 h-10 pl-5"
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter your group name..."
        />
      </div>
      <div className="color-picker">
        <div className="flex p-3">
          <h1>Choose colour</h1>
          {colors.map((color) => (
            <span
              key={color}
              className={`w-10 h-10 flex ml-3 rounded-full bg-${color} ${
                groupColor === color ? "border-2 border-black" : ""
              }`}
              onClick={() => setGroupColor(color)}
            />
          ))}
        </div>
      </div>
      <button
        className={`h-10 w-1/5 rounded-xl absolute right-10 bottom-5 text-white text-lg ${
          groupName ? "bg-black" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!groupName}
        onClick={handleAddGroup}
      >
        Create
      </button>
      <span className="bg-lavender bg-pink bg-skyblue bg-coral bg-ultramarine bg-periwinkle" />
    </div>
  );
};

export default GroupPopup;
