import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ contact, appointment }) => {

  return (
    <div>
      <ul>
        {contact?.map((data, index) => (
          <Tile
            key={index}
            name={data.name}
            phone={data.phone}
            email={data.email}
          />
        ))}
        {appointment?.map((data, index) => (
          <Tile
            key={index}
            title={data.title}
            date={data.date}
            time={data.time}
          />
        ))}
      </ul>
    </div>
  );
};
