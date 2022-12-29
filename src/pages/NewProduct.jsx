import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { addItem } from '../api/firebase';
import { imageUploader } from '../api/uploder';

export default function NewProduct() {
  const [title, setTitle] = useState('');
  const [item, setItem] = useState({});

  const fileUpload = async (e) => {
    const uploadedImage = await imageUploader(e.target.files[0]);
    const { url, public_id } = uploadedImage;
    setItem({ ...item, image: url, id: public_id });
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setTitle('✅ 새로운 제품이 등록되었습니다');
    setTimeout(() => {
      setTitle('')
    }, 4000);
  }
  
  return (
    <section>
      <form
        onSubmit={handelSubmit}
        className='grid grid-cols-1 gap-2 w-8/12 m-auto mt-5'>
        <h2 className='m-auto'><b>새로운 제품 등록</b></h2>
        {title && <h1 className='m-auto' >{title}</h1>}
        {item && <img src={item.image} alt='' className='w-5/12 m-auto' /> }
        
        <input type="file" required
          accept='image/*'
          onChange={fileUpload} />

        <input type="text" required
          onChange={(e) => setItem({ ...item, title: e.target.value })}
          placeholder='제품명' />
        <input type="number" required
          onChange={(e) => setItem({ ...item, price: Number(e.target.value) })}
          placeholder='가격' />
        <input type="text" required
          onChange={(e) => setItem({ ...item, category: e.target.value })}
          placeholder='카테고리' />
        <input type="text" required
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          placeholder='제품 설명' />
        <input type="text" required
          onChange={(e) => setItem({
            ...item,
            option: e.target.value.split(",")
          })}
          placeholder='사이즈(,로 구분)' />

        <Button text={'제품 등록하기'} />
      </form>
    </section>
  );
}

