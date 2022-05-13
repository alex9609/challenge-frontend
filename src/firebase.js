import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider,onAuthStateChanged} from "firebase/auth";
import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyDheUqWe1fmgYRMjny9uEhaw9exzYytfQE",
  authDomain: "login-bvc.firebaseapp.com",
  projectId: "login-bvc",
  storageBucket: "login-bvc.appspot.com",
  messagingSenderId: "68323472297",
  appId: "1:68323472297:web:21e9ab7d2e29967c85cab8"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
//Detect out state


  
export{provider};