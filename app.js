const express = require('express')
const Zip = require('./services/api')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Informe um CEP válido')
})

function myAsync (callback) {
    return function (req, res, next) {
        callback(req, res, next)
        .catch(next)
    }
}

app.get('/:cep', myAsync(async(req, res, next) => {
    const zip = new Zip();

    const result = await zip.apiCep(req.params.cep);
    
    res.send(result);
}))

app.get('/:fu/:city/:address', myAsync(async(req, res, next) => {
    const zip = new Zip();

    const result = await zip.apiAddress(
        req.params.fu,
        req.params.city,
        req.params.address
    );
    
    res.send(result);
}))

app.listen(port, () => {
  console.log(`Teste em execução no endereço http://localhost:${port}`)
})