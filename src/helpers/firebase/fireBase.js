import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvZVpgzu-QH5_UiCg2i8GGUE6SvcSg2OQ",
  authDomain: "ekkaecommerce.firebaseapp.com",
  projectId: "ekkaecommerce",
  storageBucket: "ekkaecommerce.firebasestorage.app",
  messagingSenderId: "681487171406",
  appId: "1:681487171406:web:f9958a1755340efd56281f",
  measurementId: "G-QW2FDMV4LJ"
};

export const app = initializeApp(firebaseConfig);
export const fbFirestore = getFirestore();
export const analytics = getAnalytics(app);


export default fbFirestore;