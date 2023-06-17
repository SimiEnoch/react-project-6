import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

export const Loading = () => {
  return (
    <div className="loading-container">
      <button className="loading-btn">
        <BiLoaderCircle />
      </button>
    </div>
  );
};
