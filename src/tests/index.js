//index.js
(async () => {
    const Gato = require('../database/model_cache');
 
    try {
        const resultadoGato= await Gato.create({
            name: 'Freud',
            origin: 'Australia'
        })
        console.log(resultadoGato);
    } catch (error) {
        console.log(error);
    }
})();