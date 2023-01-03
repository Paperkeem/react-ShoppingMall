import React from 'react';
import Cartcard from '../components/Cartcard';
import Button from '../components/ui/Button';
import useCarts from '../hooks/useCarts';

const SHIPPING = 3000;

export default function MyCart() {
  const { cartsQuery: { data: cart, isLoding } } = useCarts();
  let total = cart?.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  if(isLoding) return <p>Loding...</p>
  return (
    <>
      <ul className='p-3 border-b border-gray-300'>
        {cart && cart.map((cart) => {
          return <Cartcard
            key={cart.id}
            cart={cart}
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
          <p className='text-brand'>₩ { SHIPPING }</p>
        </div>

        <div className='bg-gray-100 p-5 px-10'>
          <p>총 금액</p>
          <p className='text-brand'>₩ { total + SHIPPING }</p>
        </div>
      </section>
      
      <Button text={'주문하기'} type='long' />
    </>
  );
}

