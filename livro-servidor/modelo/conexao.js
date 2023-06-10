const banco = require('mongoose')

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

banco.connect("mongodb://127.0.0.1:27017/livraria", options).then(()=> console.log('MongoDB conectado')).catch((err)=> console.log(err))

module.exports = banco