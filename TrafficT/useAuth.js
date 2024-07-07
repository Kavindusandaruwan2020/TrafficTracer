import { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const signUp = async (email, password, additionalData) => {
    const { firstName, lastName, phoneNumber, officerId } = additionalData;

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with additional data
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
        phoneNumber: phoneNumber,
        officerId: officerId,
      });

      // Add additional officer data to Firestore
      const officerRef = doc(db, 'officers', userCredential.user.uid); // Assuming 'officers' is your collection name
      await setDoc(officerRef, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        officerId: officerId,
      });

    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
