const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Filmes = db.define('Movies', {
    title: {
        type: DataTypes.STRING,
        required:true
    },

    description: {
        type:DataTypes.STRING,
        type:"varchar(300)",
        required:true
    },

    thumbnail: {
        type: DataTypes.STRING,
        required:true
    },

    duration: {
        type: DataTypes.STRING,
        required:true
    },

    year: {
        type: DataTypes.DECIMAL,
        required:true
    }
});

module.exports = Filmes;