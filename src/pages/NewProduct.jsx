import React, { useState } from 'react';
import Button from '../components/ui/Button';
import axios from 'axios';
import { addItem } from '../api/firebase';

export default function NewProduct() {
  const [item, setItem] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    id: "",
    option: []
  });

  const imageUploader = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    const res = await axios.post(url, formData);
    return res.data;
  }

  const fileUpload = async (e) => {
    const uploadedImage = await imageUploader(e.target.files[0]);
    const { url, public_id } = uploadedImage;
    setItem({ ...item, image: url, id: public_id });
  }
  
  return (
    <div className='grid grid-cols-1 gap-2 w-11/12 m-auto mt-5 '>
      <h2 className='m-auto'><b>새로운 제품 등록</b></h2>
      {item && <img src={item.image} alt='' className='w-5/12 m-auto' /> }
      
      <input type="file"
        onChange={fileUpload}
        className='border border-zinc-300 rounded-md p-3'
        name="" id="" />
      <input type="text"
        onChange={(e) => setItem({ ...item, title: e.target.value })}
        className='border border-zinc-300 rounded-md p-3'
        placeholder='제품명' />
      <input type="number"
        onChange={(e) => setItem({ ...item, price: Number(e.target.value) })}
        className='border border-zinc-300 rounded-md p-3'
        name="" id="" placeholder='가격' />
      <input type="text"
        onChange={(e) => setItem({ ...item, category: e.target.value })}
        className='border border-zinc-300 rounded-md p-3'
        name="" id="" placeholder='카테고리' />
      <input type="text"
        onChange={(e) => setItem({ ...item, description: e.target.value })}
        className='border border-zinc-300 rounded-md p-3'
        name="" id="" placeholder='제품 설명' />
      <input type="text"
        onChange={(e) => setItem({
          ...item,
          option: e.target.value.split(",")
        })}
        className='border border-zinc-300 rounded-md p-3'
        name="" id="" placeholder='사이즈(,로 구분)' />

      <Button text={'제품 등록하기'} onClick={() => {
        console.log(item);
        addItem(item);
        setTimeout(() => {
          
        }, 4000);
      }} />
    </div>
  );
}
