import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({children, requireAdmin}) {
  const { user } = useContext(AuthContext);

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace={true} />
  }

  return children;
}

