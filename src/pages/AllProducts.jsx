import React from 'react';
import { useQuery } from 'react-query';
import { getAllItem } from '../api/firebase';
import Product from '../components/Product';

export default function AllProducts() {
  const { isLoding, isError, data: products } = useQuery(['products'], () => getAllItem(), {staleTime : 1000 * 60 * 5});

  return (
    <div className='grid grid-cols-3 gap-3'>
      {products && products.map((product) => (
        <Product key={ product.id } product={product}/>
      ))}
    </div>
  );
}

