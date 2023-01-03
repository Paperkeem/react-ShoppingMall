import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getCartList, removeCart } from '../api/firebase';
import Cartcard from '../components/Cartcard';
import { useAuthContext } from '../context/AuthContext';
import Button from '../components/ui/Button';

export default function MyCart() {
  const { user } = useAuthContext();
  const { data: cart } = useQuery(['cart', user.uid],
    () => getCartList(user.uid));
  let total = 0;
  
  const handleRemove = (id) => {
    const uid = user && user.uid;
    removeCart(uid, id);
  }

  return (
    <>
      <ul className='p-3 border-b border-gray-300'>
        {cart && cart.map((cart) => {
          total += cart.price * cart.quantity
          return <Cartcard
            key={cart.id}
            cart={cart}
            handleRemove={handleRemove}
          />
        })}
      </ul>
      
      <section className='w-10/12 flex flex-row justify-between 
      text-center text-xl font-bold items-center m-auto p-5'>
        <div className='bg-gray-100 p-5 px-10'>
          <p>상품 총액</p>
          <p className='text-brand'>₩ { total }</p>
        </div>

        <div className='bg-gray-100 p-5 px-10'>
          <p>배송비</p>
          <p className='text-brand'>₩ 3000</p>
        </div>

        <div className='bg-gray-100 p-5 px-10'>
          <p>총 금액</p>
          <p className='text-brand'>₩ { total + 3000 }</p>
        </div>
      </section>
      
      <Button text={'주문하기'} type='long' />
    </>
  );
}

