import React, { useState, useEffect } from "react";
import GroupList from "./components/GroupList";
import "./App.css";
import NoteList from "./components/NoteList";
import NoteInput from "./components/NoteInput";
import GroupPopup from "./components/GroupPopup";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showGroupPopup, setShowGroupPopup] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedGroupColor, setSelectedGroupColor] = useState("black");

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const addGroup = (group) => {
    const newGroups = [...groups, group];
    setGroups(newGroups);
    localStorage.setItem("groups", JSON.stringify(newGroups));
  };

  const addNote = (note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const getNotesForGroup = (group) => {
    return notes.filter((note) => note.group === group);
  };

  return (
    <div className="App overflow-hidden">
      <div className="flex min-h-screen bg-black">
        <div className="h-screen w-1/4 m-auto text-3xl bg-white font-roboto">
          <div className="p-10 flex-col">
            <h2 className="font-bold">Pocket Notes</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className="h-12 w-3/4 rounded-3xl bg-black text-white text-xl font-bold"
              onClick={() => setShowGroupPopup(true)}
            >
              + Create Notes group
            </button>
          </div>
          {
            <GroupList
              groups={groups}
              setSelectedGroup={setSelectedGroup}
              setSelectedGroupColor={setSelectedGroupColor}
              selectedGroup={selectedGroup}
            />
          }
        </div>
        <div className="flex flex-col justify-center items-center h-screen w-3/4 bg-textBody">
          {!selectedGroup ? (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/backgroundimg.svg`}
                alt="Background"
                className="h-1/3"
              />
              <h2 className=" text-5xl mt-5">Pocket Notes</h2>
              <p>
                Send and receive messages without keeping your phone online.
                <br />
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
              </p>
              <p className="absolute bottom-0 text-lg">
                <small>🔒 end-to-end encrypted</small>
              </p>
            </>
          ) : (
            <>
              <div className="h-full w-full ">
                <div className="h-24 text-3xl flex items-center space-x-3 bg-grayShade ">
                  <span
                    className={`bg-${selectedGroupColor} text-white p-2 h-14  flex items-center justify-center w-14 rounded-full ml-5`}
                  >
                    {selectedGroup[0]}
                  </span>
                  <h3 className=" text-2xl">{selectedGroup}</h3>
                </div>
                <NoteList notes={getNotesForGroup(selectedGroup)} />
                <NoteInput addNote={addNote} group={selectedGroup} />
              </div>
            </>
          )}
        </div>
        {showGroupPopup && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-40"></div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <GroupPopup
                addGroup={addGroup}
                setShowGroupPopup={setShowGroupPopup}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
