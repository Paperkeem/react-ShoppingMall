import { createContext, useEffect, useState } from 'react';
import { onAuth } from '../api/firebase';


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuth(setUser);
  }, []);
  
  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}
