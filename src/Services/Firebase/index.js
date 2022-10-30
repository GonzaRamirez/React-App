import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyADBn5uSAVV5HfUjZipYRosssXnY1RMAaE",
  authDomain: "ecommerce-backend34780.firebaseapp.com",
  projectId: "ecommerce-backend34780",
  storageBucket: "ecommerce-backend34780.appspot.com",
  messagingSenderId: "721853620499",
  appId: "1:721853620499:web:b98e6d946f68fbe2ea3ae6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

