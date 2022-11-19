/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ name, img }) {
  return (
    <div className="flex-1">
      <img
        alt={name}
        src={img}
        height="200px"
        width="200px"
      />
      <div>
        {name}
      </div>
    </div>
  );
}
