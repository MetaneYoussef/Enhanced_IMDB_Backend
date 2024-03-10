require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const utilisateursRoutes = require('./routes/utilisateurs')
const filmsRoutes = require('./routes/films')


const app = express();
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/utilisateurs', utilisateursRoutes);
app.use('/api/films', filmsRoutes);

mongoose.connect(process.env.DBURI)
    .then((result) => {
        app.listen(process.env.PORT);
    })
    .catch((err) => console.log(err));

