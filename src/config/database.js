const {sequelize} = require ("sequelize")
const sequelize = new Sequelize("database", "cristian", "12345678",{
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

const conexionDB = () =>{
    sequelize
    .sync()
    .then(()=>console.log("conectado a base de datos"))
    .catch((err)=> console.log("error al conectarse a la base de datos"))
      
}
module.exports(conexcionDB, sequelize)