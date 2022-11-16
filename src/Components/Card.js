/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ name, img }) {
  return (
    <div>
      <img
        alt={name}
        src={img}
      />
      <div>
        {name}
      </div>
    </div>
  );
}
