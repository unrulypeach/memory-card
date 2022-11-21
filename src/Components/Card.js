/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({
  name, img, setNewNums, checkWin,
}) {
  return (
    <button
      type="button"
      className="flex flex-col items-center flex-1"
      onClick={() => { checkWin(); setNewNums(); }}
    >
      <img
        alt={name}
        src={img}
        width="250px"
      />
      <div className="text-xl">
        {name}
      </div>
    </button>
  );
}
