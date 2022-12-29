import React, { useEffect, useState } from 'react';
import { getAllItem } from '../api/firebase';
import Product from '../components/Product';

export default function AllProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllItem()
      .then((products) => Object.entries(products).map((product) => (
        { ...product[1], id: product[0] })))
      .then((res)=>setProducts(res));
  }, [])

  return (
    <div className='grid grid-cols-3 gap-3'>
      {products && products.map((product) => (
        <Product product={product}/>
      ))}
    </div>
  );
}

