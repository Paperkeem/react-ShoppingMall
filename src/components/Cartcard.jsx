import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import useCarts from '../hooks/useCarts';

const ICON_CLASS = 'transition-all text-2xl hover:text-brand hover:scale-105' 

export default function Cartcard({ cart, cart: { id, title, image, option, price, quantity } }) {
  const { minusQuery, plusQuery, deleteQuery } = useCarts();

  const handleMinus = () => {
    if (quantity < 2) return;
    minusQuery.mutate({ cart, quantity });
  }

  const handlePlus = () => {
    plusQuery.mutate({ cart, quantity });
  }
  
  const handelDelete = () => {
    deleteQuery.mutate({ id });
  }

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
        <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus}/>
        <p>{quantity}</p>
        <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus}/>
        <RiDeleteBinLine className={ICON_CLASS} onClick={handelDelete} />
      </div>
    </article>
  );
}

