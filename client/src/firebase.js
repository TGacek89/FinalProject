import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0ISFT1rcL11PNNNmiDH2W_AVRK8HLnL4",
  authDomain: "photo-blog-e536d.firebaseapp.com",
  projectId: "photo-blog-e536d",
  storageBucket: "photo-blog-e536d.appspot.com",
  messagingSenderId: "51456898328",
  appId: "1:51456898328:web:3648276f571e24cc0ada6d",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export default storage;
