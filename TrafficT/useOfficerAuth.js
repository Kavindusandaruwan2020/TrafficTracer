import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
} from 'firebase/auth';

const OfficerAuthContext = createContext();

export const OfficerAuthProvider = ({ children }) => {
  const [officer, setOfficer] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (officer) => {
      setOfficer(officer);
    });

    return () => unsubscribe();
  }, []);

  const officerSignIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const officerSignUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const officerLogOut = () => signOut(auth);

  return (
    <OfficerAuthContext.Provider value={{ officer, officerSignIn, officerSignUp, officerLogOut }}>
      {children}
    </OfficerAuthContext.Provider>
  );
};

export const useOfficerAuth = () => useContext(OfficerAuthContext);
