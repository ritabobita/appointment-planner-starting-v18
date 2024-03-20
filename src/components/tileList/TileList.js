import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({contact}) => {

  return (
    <div>
      <ul>
        {contact.map((data, index) => (
          <Tile
            key={index}
            name={data.name}
            phone={data.phone}
            email={data.email}
          />
        ))}
      </ul>
    </div>
  );
};
