const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// Config
const config = require('./src/config/config');

// Routers
const authRouter = require('./src/routes/auth.routes');
const contactRouter = require('./src/routes/contact.routes');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());

app.use("/api", authRouter);
app.use("/api", contactRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://igorkarchinskiy:McEPqC5COO7Q2bhZ@cluster0.n2ktxk3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        app.listen(config.port, () => {
            console.log(`Server started`);
        });
    } catch (err) {
        console.error(err);
    }
}

start();
