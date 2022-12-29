import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';
import { Login, Logout, } from '../api/firebase';
import { AuthContext } from '../context/AuthContext';
import User from './User';
import Button from './ui/Button';

export default function Header() {

  const { user } = useContext(AuthContext);

  return (
    <header
      className='flex justify-between border-b
      border-gray-300 p-2'>
      <Link to="/" className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to="products">Products</Link>
        {user ? <Link to="carts">Carts</Link> : null}
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