import React from 'react';
import AllProducts from './AllProducts';
import image from '../image/bg.jpg'

export default function Home() {
  return (
    <div>
      <div className='w-full h-60 overflow-hidden'>
        <img src={image} alt="" />
      </div>
      <AllProducts />
    </div>
  );
}

