const express = require('express');
const app = express();
const conn = require('./db/conn');
const Filmes = require('./models/Filmes');
const MoviesRoutes = require('./Routes/MoviesRoutes');

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json());

//Routes
app.use('/', MoviesRoutes);


try {
    conn.sync();
    app.listen(3000)
}catch(err){
    console.log(err)
}