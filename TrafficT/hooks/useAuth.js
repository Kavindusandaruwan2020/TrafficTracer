import React, { useState, useEffect, createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provide auth
const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        setUser(null);
        AsyncStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signUp,
    signIn,
    signOut,
  };
};
