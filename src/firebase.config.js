// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCnAKjYPoJCr4bbClg_vOUjupOGtyAU730",
	authDomain: "hotel-room-booking-cd1dc.firebaseapp.com",
	projectId: "hotel-room-booking-cd1dc",
	storageBucket: "hotel-room-booking-cd1dc.appspot.com",
	messagingSenderId: "584904241697",
	appId: "1:584904241697:web:edebd2e0e04217d034e960",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
