import React, { useState } from "react";

const GroupList = ({
  groups,
  setSelectedGroup,
  setSelectedGroupColor,
  selectedGroup,
}) => {
  const handleOnClick = (group) => {
    setSelectedGroup(group.name);
    setSelectedGroupColor(group.color);
  };

  return (
    <ul className="mt-10 ml-14 space-y-2">
      {groups.map((group, index) => (
        <li
          key={index}
          className={` ${
            group.name === selectedGroup
              ? "bg-textBody rounded-tl-3xl rounded-bl-3xl"
              : ""
          }`}
          onClick={() => handleOnClick(group)}
        >
          <div className="flex space-x-2 items-center h-16 ">
            <div
              className={`h-12 ml-2 flex items-center justify-center w-12 rounded-full bg-${group.color}`}
            >
              {group.name[0]}
            </div>
            <span>{group.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
