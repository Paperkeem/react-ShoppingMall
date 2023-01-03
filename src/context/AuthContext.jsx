import { createContext, useContext, useEffect, useState } from 'react';
import {  onAuth } from '../api/firebase';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuth(setUser);
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, uid: user?.uid }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}