import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getCartList, onAuth } from '../api/firebase';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuth(setUser);
  }, []);

  const { data: cart } = useQuery(['cart', user?.uid],
    () => getCartList(user?.id),
    { enabled: !!user?.uid, }
  );
  
  return (
    <AuthContext.Provider value={{user, cart}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}