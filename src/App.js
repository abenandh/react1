// App.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCseUU4041pZEg1VMkAZRyx8fCqeX794cM",
  authDomain: "react-3887f.firebaseapp.com",
  projectId: "react-3887f",
  storageBucket: "react-3887f.appspot.com",
  messagingSenderId: "1055822006322",
  appId: "1:1055822006322:web:7b223a6d27a1e46162942b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import Joke from "./Joke";

function App() {
	return (
		<div className="App">
			<h1>Joke Generator Using React and Joke API</h1>
			<Joke/>
		</div>
	);
}

export default App;

