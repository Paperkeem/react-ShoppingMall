import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addCarts, howCart } from '../api/firebase';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { state: { product, product: { image, title, description, option, price } } } = useLocation();
  const { user } = useAuthContext();
  
  const [selected, setSelected] = useState(option && option[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  
  const [alram, setAlram] = useState('');
  const handleClick = (e) => {
    const uid = user && user.uid;
    const cart = { ...product, option: selected, quantity: 1 };
    addCarts(uid, cart)
      .then(() => setAlram('✅ 상품이 추가 되었습니다'))
      .then(() => {
        setTimeout(() => {
          setAlram('');
        }, 3000);
      });
  };
  
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 p-3 gab-4'>
      <img src={image} alt="" className=''/>
      <div className='p-5'>
        <h1 className='text-4xl font-bold mb-3'>{title}</h1>
        <h1 className='text-2xl pb-3 border-b border-gray-500'>₩{price}</h1>
        <h1 className='text-xl my-3'>{description}</h1>
        
        <div className='flex items-center mb-3'>
          <h1 className='text-xl'>옵션 :</h1>
          <select
            onChange={handleSelect}
            value={selected}
            className='flex-1 p-2 m-4 border border-zinc-500'
          >
            {option && option.map(data => <option key={data}>{data}</option>)}
          </select>
        </div>
        {alram && alram}
        <Button
          type='long'
          text={'장바구니에 추가'} onClick={handleClick} />
      </div>
    </section>
  );
}

