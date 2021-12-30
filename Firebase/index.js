import { initializeApp } from "firebase/app"
import { getStorage, ref } from 'firebase/storage'
import { collection, addDoc,getFirestore } from 'firebase/firestore' 
export const firebaseConfig = {
    apiKey: "AIzaSyBgUJ1SBt0XfZBhGP7epcLLKV64utQ1Hok",
    authDomain: "react-native-7d4b9.firebaseapp.com",
    databaseURL: "https://react-native-7d4b9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-native-7d4b9",
    storageBucket: "react-native-7d4b9.appspot.com",
    messagingSenderId: "959453194039",
    appId: "1:959453194039:web:e9356a0468e32ad1239cb2",
    measurementId: "G-8GDWXWNZCB"
}

const app= initializeApp(firebaseConfig)
const storage= getStorage()
const mountainRef= ref(storage, 'mountain.jpg')
const mountainImagesRef = ref(storage, 'images/mountains.jpg'); 
const db= getFirestore()
export const addData= async ()=> {
    try {
        const docRef= await addDoc(collection(db, "users"), {
            first: 'Pham',
            last: 'Giang',
            born: 2002
        })
        console.log('Document written with ID: ', docRef.id)
    }
    catch(e) {
        console.error('Error adding docuent: ', e)
    }
}