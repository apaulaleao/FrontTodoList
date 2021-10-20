//mongodb+srv://dbUser:<password>@lista.qqtxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const moongoose = require('mongoose');
const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://dbUser:Gg2rEQkFI7N9ebaL@lista.qqtxd.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig,{
useNewUrlParser : true,
useUnifiedTopology: true,
});

module.exports = connection;