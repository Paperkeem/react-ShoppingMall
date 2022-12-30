import React from 'react';
import Button from '../components/ui/Button';

export default function Detail({product: {title, description, price, image, option}}) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 p-3 gab-4'>
      <img src={image} alt="" className=''/>
      <div className='p-5'>
        <h1 className='text-4xl font-bold mb-3'>{title}</h1>
        <h1 className='text-2xl pb-3 border-b border-gray-500'>₩{price}</h1>
        <h1 className='text-xl my-3'>{description}</h1>
        <div className='flex'>
          <h1 className='text-xl'>옵션 :
            <select className='w-full'>
              {option.map(data => <option key={data} value={data}>{data}</option>)}
            </select>
          </h1>
        </div>
        <br />
        <br />
        <Button text={'장바구니에 추가'} />
      </div>
    </section>
  );
}

