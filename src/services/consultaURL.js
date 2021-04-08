const axios = require('axios')
const url = require('url')
const http = require('http')
const modelToken = require('../database/model_token')
const { Op } = require('sequelize')

module.exports = http.createServer((req, res) =>{
  if(req.url != '/favicon.ico'){
    const argumento = url.parse(req.url,true).query
    const valor = String(argumento.q)

    const chavekey = String(argumento.t)
      
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*'
    })

    const query = `${chavekey}`;

    const aux = modelToken.findOne({ where: { 
        token: { 
          [Op.like]: query 
        }
      }, raw: "true"
    }).then(
      function (verificado) {
        if(verificado !== null){
          console.log('Chave valida!')
          makeRequest()
        }else{
          res.end('<h2>Chave Invalida</h2>')
        }
      }).catch(function (error) {
        console.log("deu errado");
      })

    async function makeRequest() { 
      const resposta = await axios.get('https://api.thecatapi.com/v1/breeds/search', {
        params: {
          'q': valor
        }
      },{
        headers: {
          'x-api-key': '56e7d77a-f976-458e-b6cd-41b55f008dfb'
        }
      })
      
      res.end(JSON.stringify(resposta.data))
      const resultado = resposta.data
      for (var gato of resultado) 
       {
          (async () => {
            const Gato = require('../database/model_cache')

            try {
                const resultadoGato = await Gato.create({
                  name: gato.name,
                  weight_imperial: gato.weight.imperial,
                  weight_metric: gato.weight.metric,
                  cfa_url: gato.cfa_url,
                  vetstreet_url: gato.vetstreet_url,
                  vcahospitals_url: gato.vcahospitals_url,
                  temperament: gato.temperament,
                  origin: gato.origin,
                  country_codes: gato.country_codes,
                  country_code: gato.country_code,
                  description: gato.description,
                  life_span: gato.life_span,
                  indoor: gato.indoor,
                  lap: gato.lap,
                  alt_names: gato.alt_names,
                  adaptability: gato.adaptability,
                  affection_level: gato.affection_level,
                  child_friendly: gato.child_friendly,
                  dog_friendly: gato.dog_friendly,
                  energy_level: gato.energy_level,
                  grooming: gato.grooming,
                  health_issues: gato.health_issues,
                  intelligence: gato.intelligence,
                  shedding_level: gato.shedding_level,
                  social_needs: gato.social_needs,
                  stranger_friendly: gato.stranger_friendly,
                  vocalisation: gato.vocalisation,
                  experimental: gato.experimental,
                  hairless: gato.hairless,
                  natural: gato.natural,
                  rare: gato.rare,
                  rex: gato.rex,
                  suppressed_tail: gato.suppressed_tail,
                  short_legs: gato.short_legs,
                  wikipedia_url: gato.wikipedia_url,
                  hypoallergenic: gato.hypoallergenic,
                  reference_image_id: gato.reference_image_id
                }).finally(() => {
                  Gato.close()
              })
            } catch (error) {
              //
            }
          })();
        } 
    }     
    console.log('Requisição recebida: ' + valor)      
  }
})