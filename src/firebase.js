import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4Z0JyFK9hvhPB3O9w4evA2axystjyBpE",
  authDomain: "vblog-186f6.firebaseapp.com",
  projectId: "vblog-186f6",
  storageBucket: "vblog-186f6.appspot.com",
  messagingSenderId: "892542712501",
  appId: "1:892542712501:web:eda6c4889f86cd5365dcfc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
