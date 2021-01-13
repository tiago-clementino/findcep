# FindCep

Módulo simples de consulta à CEPs a partir de endereços e endereços a partir de CEPs, desenvolvido a partir do serviço [ViaCep](https://viacep.com.br/).

## Instalação

```
npm install findcep --save
```

## Código Exemplo

```javascript
const Zip = require('findcep')

const zip = new Zip();

const cep = '58428830';
const fu = 'PB';
const city = 'Campina Grande';
const address = 'Rua Aprígio Veloso';

const resultCep = await zip.apiAddress(fu,city,address);
const resultAddress = await zip.apiCep(cep);

console.log(resultCep);

console.log(resultAddress);

```

### Saída

```javascript
{
    bairro: "Bela Vista", 
    cep: "58428-830", 
    complemento: "", 
    ddd: "83", 
    gia: "", 
    ibge: "2504009", 
    localidade: "Campina Grande", 
    logradouro: "Rua Aprígio Veloso", 
    siafi: "1981", 
    uf: "PB"
}

[
    {
        bairro: "Bela Vista", 
        cep: "58428-830", 
        complemento: "", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso", 
        siafi: "1981", 
        uf: "PB"
    }, 
    {
        bairro: "Bodocongó", 
        cep: "58430-380", 
        complemento: "até 172/173", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso", 
        siafi: "1981", 
        uf: "PB"
    }, 
    {
        bairro: "Universitário", 
        cep: "58429-140", 
        complemento: "de 748/749 ao fim", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso", 
        siafi: "1981", 
        uf: "PB"
    }, 
    {
        bairro: "Universitário", 
        cep: "58429-170", 
        complemento: "de 174/175 a 746/747", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso", 
        siafi: "1981", 
        uf: "PB"
    }, 
    {
        bairro: "Universitário", 
        cep: "58429-970", 
        complemento: "", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso 785", 
        siafi: "1981", 
        uf: "PB"
    }, 
    {
        bairro: "Universitário", 
        cep: "58429-959", 
        complemento: "", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso 785", 
        siafi: "1981", 
        uf: "PB"
    }, 
    {
        bairro: "Universitário", 
        cep: "58429-900", 
        complemento: "", 
        ddd: "83", 
        gia: "", 
        ibge: "2504009", 
        localidade: "Campina Grande", 
        logradouro: "Rua Aprígio Veloso 882", 
        siafi: "1981", 
        uf: "PB"
    }
]

```

## API de teste

Para testar o módulo desenvolvido aqui, basta clonar este repositório e dentro da pasta raiz digitar :

```
node app.js
```
Em seguida, no endereço `http://localhost:3000` inclua os parãmetros CEP ou UF/Cidade/Logradouro, para consultar o endereço ou o provável CEP, respectivamente. Para o exemplo de código descrito na seção anterior a consulta seria a seguinte:

```
http://localhost:3000/58428830
```
ou

```
http://localhost:3000/PB/Campina Grande/Rua Aprígio Veloso
```
Como resposta teremos na aba do navegador utilizado a mesma saída mostrada anteriormente.

[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/tiago-clementino/findcep/blob/master/LICENSE)<br />
