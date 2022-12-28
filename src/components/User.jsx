import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <>
      <img
        src={photoURL}
        alt="photoURL"
        referrerPolicy='no-referrer'
        className='w-8 rounded-full'
      />
      <span className='hidden md:block'>{displayName}</span>
    </>
  );
}

