import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({ product, product: { id, title, price, image }, }) {
  const navigate = useNavigate();
  const hadleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  }
  return (
    <li onClick={hadleClick} className='cursor-pointer transition-all hover:scale-105'>
      <article className='bg-slate-50 shadow-lg p-2 mt-3'>
        <img src={image} alt="" className='mb-2'/>
        <h1 className='text-xl font-bold'>{title}</h1>
        <h1 className='text-lg opacity-70'>{price}</h1>
      </article>
    </li>
  );
}

