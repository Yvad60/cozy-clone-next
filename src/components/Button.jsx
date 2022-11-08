import React from 'react';

export default function Button({ children }) {
  return (
    <button className='px-10 py-5 text-lg font-bold text-center lg:text-xl lg:py-30p bg-dark_redish text-soft_white rounded-10p font-Geomanist tracking-2p bg-noise'>
      {children}
    </button>
  );
}
