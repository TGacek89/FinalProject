import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVn6hfiGkao_DbHeejNWSlpOuN2UGi7cU",
  authDomain: "blog-50336.firebaseapp.com",
  projectId: "blog-50336",
  storageBucket: "blog-50336.appspot.com",
  messagingSenderId: "584885983097",
  appId: "1:584885983097:web:5dedf75d465557fb0f01a8",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export default storage;
