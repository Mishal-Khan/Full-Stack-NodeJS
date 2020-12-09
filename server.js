const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
const app = express();

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

// const sequelize = new Sequelize('mine','root','12345',{
// 	dialect: 'mysql'
// })

// const check = sequelize.define('check',{
// 	uuid: {
// 	type: Sequelize.UUID,
// 	primaryKey: true,
// 	defaultValue: Sequelize.UUIDV4
// },
// title: Sequelize.STRING,
// description: Sequelize.STRING
// });

const db = require("./src/models");
db.sequelize.sync();

// sequelize.sync({
// 	logging: console.log,
// 	force: true
// }).then(() => {
// console.log("suucess");
// })
// .catch(err => {
// console.error("unable");	
// })

app.get("/", (req,res) => {
	res.json({message: "welcome"});
});

require("./src/routes/inter.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});

