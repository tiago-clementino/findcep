const fetch = require('node-fetch');

module.exports = class Zip {

    constructor() {
      this.url = 'https://viacep.com.br/ws';
      this.format = 'json';
    }

    /**
     * Recebe o CEP conhecido como parâmetro e retorna um objeto JSON contendo os dados do endereço correspondente
     * 
     * @param {string} cep 
     * @returns {Promise}
     */
    async apiCep (cep) {
        if (!cep) {
            throw new Error("CEP vazio");
        }

        const nonformatedCep = cep.trim().replace('-', '').replace('.', '');

        if (nonformatedCep.length < 8) {
            throw new Error("CEP incompleto");
        }
        if (isNaN(nonformatedCep)) {
            throw new Error("CEP inválido");
        }

        const response = await fetch(`${this.url}/${nonformatedCep}/${this.format}/`);
        return response.json();
    }

    /**
     * Recebe como parâmetro a Unidade Federativa (uf ou fu, em inglês), a cidade (city) e o logradouro (address).
     * Retorna um objeto JSON contendo uma lista com no máximo 50 CEPs ordenados entre os mais prováveis para aquele endereço
     * 
     * @param {string} fu 
     * @param {string} city 
     * @param {string} address 
     * @returns {Promise}
     */
    async apiAddress (fu,city,address) {
        if (!(fu && city && address)) {
            throw new Error("Os campos Cidade, UF e Logradouro são obrigatórios");
        }

        const trimFU = encodeURI(fu.trim());
        const trimCity = encodeURI(city.trim());
        const trimAddress = encodeURI(address.trim());

        if (trimFU.length != 2) {
            throw new Error("A sigla da unidade federativa deve conter exatamente duas letras");
        }

        if (trimCity.length < 3 || trimAddress.length < 3) {
            throw new Error("Tanto o nome da Cidade, quanto o nome do Logradouro devem conter no mínimo três caracteres");
        }
        
        const response = await fetch(`${this.url}/${trimFU}/${trimCity}/${trimAddress}/${this.format}/`);
        return response.json();
    }

}