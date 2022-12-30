import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getOneItem } from '../api/firebase';
import Detail from '../components/Detail';

export default function ProductDetail() {
  const { id } = useParams();
  const { isLoding, error, data: product } = useQuery(['product', id],
    () => getOneItem(id),
    { staleTime: 1000 * 60 * 5 });
  
  return (
    <section>
      {product && <Detail key={ product.id } product={product} />}
    </section>
  );
}

