import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnnoaGo6vSsIEJLcYzKfacnnVT28lzi0I",
  authDomain: "traffictracer999.firebaseapp.com",
  projectId: "traffictracer999",
  storageBucket: "traffictracer999.appspot.com",
  messagingSenderId: "737334769756",
  appId: "1:737334769756:web:626b6583ff2a962e0bce99",
  measurementId: "G-XZY69BCCTH"
};
// Check if Firebase app is already initialized to avoid re-initialization
const app = initializeApp(firebaseConfig);

// Initialize auth only if it's not already initialized
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (error) {
  // Handle error or log if necessary
  console.error('Firebase auth initialization error:', error);
  auth = null; // Set auth to null or handle appropriately
}

const db = getFirestore(app);

export { auth, db };