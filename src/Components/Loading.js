import React from 'react';

export default function Loading() {
  return (
    <>
      <div className="text-4xl font-bold leading-loose">
        Loading
      </div>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  );
}
