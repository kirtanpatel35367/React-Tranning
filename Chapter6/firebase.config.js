// Import the functions you need from the SDKs you need
import {getApp,getApps} from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-lsAUIFtTx01_nrCa8tcRAx0NHd99YE8",
  authDomain: "job-portal-web-app-3e362.firebaseapp.com",
  projectId: "job-portal-web-app-3e362",
  storageBucket: "job-portal-web-app-3e362.firebasestorage.app",
  messagingSenderId: "353342145657",
  appId: "1:353342145657:web:ee7c465a2d3abe39c880a8",
  measurementId: "G-467LWKKT82"
};

const app = getApps.length>0 ? getApp():initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app