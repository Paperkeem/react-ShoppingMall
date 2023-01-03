import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addCarts, getCartList, removeCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCarts() {
  const {uid} = useAuthContext();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(['cart', uid || ''],
    () => getCartList(uid),
    { enabled: !!uid, }
  );

  const addQuery = useMutation(({cart}) => {
    addCarts(uid, cart);
  }, {
    onSuccess: () => { queryClient.invalidateQueries(['cart']) },
  });

  const minusQuery = useMutation(({ cart, quantity }) => {
    addCarts(uid, { ...cart, quantity: quantity - 1 });
  }, {
    onSuccess: () => queryClient.invalidateQueries(['cart']),
  });

  const plusQuery = useMutation(({ cart, quantity }) => {
    addCarts(uid, { ...cart, quantity: quantity + 1 });
  }, {
    onSuccess: () => { queryClient.invalidateQueries(['cart']) },
  });

  const deleteQuery = useMutation(({ id }) => {
    removeCart(uid, id);
  }, {
    onSuccess: () => { queryClient.invalidateQueries(['cart']) },
  });

  return {cartsQuery, addQuery, minusQuery, plusQuery, deleteQuery}
}

