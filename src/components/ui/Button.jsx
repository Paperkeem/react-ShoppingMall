import React from 'react';

export default function Button({ text, onClick, type }) {
  const btntype = type == 'long';
  return (
    <button
      className={btntype ? 'w-full p-2 px-4 bg-brand text-white rounded-md'
        : 'p-2 px-4 bg-brand text-white rounded-md'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

