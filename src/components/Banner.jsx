import React from 'react';

export default function Banner() {
  return (
    <section className='w-full h-60 relative bg-yellow-800'>
      <div className='w-full h-full bg-cover bg-banner opacity-90' />
      <div className='absolute w-full top-28 text-white text-center'>
        <h1 className='text-3xl'>Shop With Us !</h1>
      </div>
    </section>
  );
}

