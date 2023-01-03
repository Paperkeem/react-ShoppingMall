import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Login, Logout, } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import User from './User';
import Button from './ui/Button';

export default function Header() {

  const { user, cart } = useAuthContext();

  return (
    <header
      className='flex justify-between border-b
      border-gray-300 p-2'>
      <Link to="/" className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>PaperShop</h1>
      </Link>
      
      <nav className='flex flex-row items-center gap-4 font-semibold'>
        <Link to="products">Products</Link>
        {user
          ? <Link to="carts" className='text-2xl relative'>
            <FiShoppingCart />
            <span className='absolute bottom-3 left-4 bg-brand text-white text-sm 
            px-1 rounded-full'>{cart?.length}</span>
          </Link>          
          : null}
        {user && user.isAdmin
          ? (
            <Link to="products/new" className='text-2xl'>
              <HiOutlinePencilAlt />
            </Link>
          )
          : null }
        
        {user ? <User user={ user } /> : null}
        
        {user
          ? <Button text={'Logout'} onClick={Logout} />
          : <Button text={'Login'} onClick={Login} />
        }
        
      </nav>
    </header>
  );
}