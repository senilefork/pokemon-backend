//use dotenv for storing environment variables for process.env
require("dotenv").config();

const PORT = +process.env.PORT || 5000;

console.log('PORT:', PORT.toString())

module.exports = { PORT }