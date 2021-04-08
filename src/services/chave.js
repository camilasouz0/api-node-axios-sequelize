const crypto = require('crypto')
const http = require('http')
const url = require('url')
const fs = require('fs')

module.exports = http.createServer((req, res) => {
  
    if(req !== 'undefined'){
        const argumento = url.parse(req.url,true).query
        var valor = String(argumento.x)
    }

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin' : '*'
    })

    //let readStream = fs.createReadStream(__dirname + '../../view/login.html')
    let readStream = fs.createReadStream(__dirname + '/../view/login.html')
    readStream.pipe(res)

    const header = JSON.stringify({
    'alg': 'HS256',
    'typ': 'JWT'
    })

    const payload = JSON.stringify({
    'api-key': valor
    })

    const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '')
    const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '')
    const secret = 'minha-api-cat'

    const data = base64Header + '.' + base64Payload

    const signature = crypto
    .createHmac('sha256', secret)
    .update(data)
    .digest('base64')

    const signatureUrl = signature
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
      
    if(valor !== 'undefined' && valor !== ''){
        res.end(JSON.stringify('<br><h3>Assinatura:</h3> ' + signatureUrl + '<h2>Copie a sua chave</h2>'))
   

    const token = signatureUrl;
    console.log(token);
      
        try {
            //INSERE TOKEN NO BANCO
            const Catnip = require('../database/model_token')
            const resultadoGato = Catnip.create({
                token: token
            })
        } catch (error) {
            console.log(error)
        }
      
    }

})
