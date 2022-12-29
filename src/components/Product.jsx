import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  const { id, title, price, image } = product;
  return (
    <Link to={`/products/${id}`}>
      <article className='bg-slate-50 shadow-lg p-2 mt-3'>
        <img src={image} alt="" className='mb-2'/>
        <h1 className='text-xl font-bold'>{title}</h1>
        <h1 className='text-lg opacity-70'>{price}</h1>
      </article>
    </Link>
  );
}

