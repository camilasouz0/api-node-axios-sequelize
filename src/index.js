const api = require('./services/consultaURL')
const web = require('./services/webService')
const chave = require('./services/chave')
const sql = require('./database/db')

const port1 = 8080
const port2 = 8081
const port3 = 8082

//API rodando na porta 8080
api.listen(port1, ()=>{
  console.log('\nApi rodando na porta ' + port1)
})

//WEB SERVICE na porta 8081
web.listen(port2, ()=>{
  console.log('Web service rodando na porta ' + port2)
})

//CHAVE na porta 8082
chave.listen(port3, ()=>{
  console.log('Gerar chave API na porta ' + port3)
})

