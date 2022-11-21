/* eslint-disable react/prop-types */
import React from 'react';

export default function GameEnd({
  score, maxPts, gameStatus, gameReset,
}) {
  return (
    <div
      className="absolute text-6xl text-center font-bold text-[#FFF]
        left-0 top-0 bg-translucentGrey h-screen w-screen pt-48"
      style={{ display: gameStatus ? 'block' : 'none' }}
    >
      <div>
        Game Over!
      </div>
      <div>
        You scored:
        {' '}
        {score}
        {' '}
        /
        {' '}
        {maxPts}
      </div>
      <button
        type="button"
        className="text-2xl bg-turq rounded p-4 mt-4"
        onClick={gameReset}
      >
        New Game
      </button>
    </div>
  );
}
