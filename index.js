const firebaseConfig = {

    apiKey: "AIzaSyDRvH7f74rVMyokopjFuXj1mMGuHeVlYSw",

    authDomain: "prueba-de-base-de-datos-912b8.firebaseapp.com",

    projectId: "prueba-de-base-de-datos-912b8",

    storageBucket: "prueba-de-base-de-datos-912b8.appspot.com",

    messagingSenderId: "637288196902",

    appId: "1:637288196902:web:27ac016d8ed21bff87afe7",

    measurementId: "G-G29MSFCJ3R"

};


const app = firebase.initializeApp(firebaseConfig);

const Formulario = document.querySelector('#Formulario');
const emailInput = document.querySelector('#email');
const contrasenaInput = document.querySelector('#contrasena');

Formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const contrasena = contrasenaInput.value;

    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .then((userCredential) => {
            // Usuario autenticado con éxito
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
        })
        .catch((error) => {
            // Error durante la autenticación
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error de autenticación:", errorCode, errorMessage);
        });
});