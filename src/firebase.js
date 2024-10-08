import { initializeApp } from "firebase/app"; // firebase initiliztion of app

// firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyBjRvwb7RwNd-gYcST3NEtdnEi7R1qITO4",
  authDomain: "sangu-app.firebaseapp.com",
  projectId: "sangu-app",
  storageBucket: "sangu-app.appspot.com",
  messagingSenderId: "523997337821",
  appId: "1:523997337821:web:26d8562a30ac3b37426334",
  databaseURL: "https://sangu-app-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig); // connect our firebase account
