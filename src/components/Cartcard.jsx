import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function Cartcard({ cart: { id, title, image, option, price, quantity }, handleRemove }) {

  return (
    <article className='flex flex-row items-center justify-between 
    gap-3 m-3'>
      <img src={image} alt="" className='w-32' />
      <div className='flex-1'>
        <p className='text-lg'>{title}</p>
        <p className='font-bold text-brand'>{option}</p>
        <p>₩ {price}</p>
      </div>
      <div className='flex gap-3'>
        <button className='text-2xl'>
          <AiOutlineMinusSquare />
        </button>
        <p>{quantity}</p>
        <button className='text-2xl'>
          <AiOutlinePlusSquare />
        </button>
        <button
          onClick={() => handleRemove(id)}
          className='text-2xl'>
          <RiDeleteBinLine />
        </button>
      </div>
    </article>
  );
}

