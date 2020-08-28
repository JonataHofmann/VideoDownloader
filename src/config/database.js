const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' é menor do que o limite mínimo '{MIN}'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' é maior do que o limite mínimo '{MAX}'"
mongoose.Error.messages.String.enum = "o Valor '{VALUE}' não é válido para '{PATH}'"