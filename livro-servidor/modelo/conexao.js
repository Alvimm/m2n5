const banco = require('mongoose')
require('dotenv').config()

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

banco.connect(process.env.MONGO_URI, options).then(()=> console.log('MongoDB conectado')).catch((err)=> console.log(err))

module.exports = banco