'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updateProfile,
} from 'firebase/auth';
import { auth } from '@/app/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const delete_user = (id) => {
    return deleteUser(id);
  };

  const updateprofile = (user, displayName) => {
    return updateProfile(user, {
      displayName,
    });
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, delete_user,updateProfile }}>
      {loading ? null : children}
      {/* {children} */}
    </AuthContext.Provider>
  );
};






