/* eslint-disable react/prop-types */
import React from 'react';

export default function Score({ score }) {
  return (
    <div className="text-center font-bold text-xl py-4">
      score:
      {' '}
      {score}
    </div>
  );
}
