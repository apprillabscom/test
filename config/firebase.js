import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/analytics";
/**
 * Instancia de firebase para realizar consultas, actualizacion y registro de datos
 */
const firebaseConfig = {
    apiKey: "AIzaSyAp6FDMEufLZlOQfjHTw08AyimXK0NOuk0",
    authDomain: "escuelacoloming.firebaseapp.com",
    projectId: "escuelacoloming",
    storageBucket: "escuelacoloming.appspot.com",
    messagingSenderId: "627722491240",
    appId: "1:627722491240:web:89314b8517258d1bbb72dd",
    measurementId: "G-BJE5YW52B5"
};
/**
 * Inicializa firebase si aun no ha sido instanciada, se ejecuta al inicar el app
 */
 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };