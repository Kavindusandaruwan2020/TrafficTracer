import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnnoaGo6vSsIEJLcYzKfacnnVT28lzi0I",
  authDomain: "traffictracer999.firebaseapp.com",
  projectId: "traffictracer999",
  storageBucket: "traffictracer999.appspot.com",
  messagingSenderId: "737334769756",
  appId: "1:737334769756:web:626b6583ff2a962e0bce99",
  measurementId: "G-XZY69BCCTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
