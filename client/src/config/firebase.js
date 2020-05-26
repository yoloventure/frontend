import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBCzwc8T8NBK8_BTm7jZsygm0qJUMjJsrg",
    authDomain: "yolo-56639.firebaseapp.com",
    databaseURL: "https://yolo-56639.firebaseio.com",
    projectId: "yolo-56639",
    storageBucket: "yolo-56639.appspot.com",
    messagingSenderId: "558666023252",
    appId: "1:558666023252:web:5a99d4cb70db18a91e48c1",
    measurementId: "G-59ZWF4KG5B"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire