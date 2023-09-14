const express = require("express");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./prueba-de-base-de-datos-912b8-firebase-adminsdk-4ydxs-79469cf326.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para procesar el formulario de registro
app.post('/signup', async (req, res) => {
    console.log(req.body);
    const user = {
        email: req.body.email,
        password: req.body.password,
    }

    try {
        const userResponse = await admin.auth().createUser({
            email: user.email,
            password: user.password,
            emailVerified: false,
            disabled: false,
        });
        res.json(userResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});