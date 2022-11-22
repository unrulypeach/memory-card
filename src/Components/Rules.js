import React from 'react';

export default function Rules() {
  return (
    <div
      className="absolute text-black bg-[#FFF]
        bg-opacity-80 w-52 p-4 right-[20%] top-[25%]
        rounded"
    >
      Click on a hero that has not been clicked yet!
      The game ends when a hero is selected twice.
    </div>
  );
}
