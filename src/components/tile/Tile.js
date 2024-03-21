import React from "react";

export const Tile = ({name, phone, email, title, date, time}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      <p className="tile">{phone}</p>
      <p className="tile">{email}</p>
      <p className="tile-title">{title}</p>
      <p className="tile">{date}</p>
      <p className="tile">{time}</p>
    </div>
  );
};
