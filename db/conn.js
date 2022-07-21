const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('filmes', 'root', '92389002', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conectado com MySql!!!');
}catch(error){
    console.error(error);
}

module.exports = sequelize;