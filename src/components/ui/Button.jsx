import React from 'react';

export default function Button({text, onClick}) {
  return (
    <button
      className='p-2 px-4 bg-brand text-white rounded-md'
      onClick={onClick}
    >
      {text}
    </button>
  );
}

