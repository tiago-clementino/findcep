
const Zip = require('../services/api')

test('busca cep', async () => {
    const zip = new Zip();

    const cep = '58428830';

    const result = await zip.apiCep(cep);

    expect(result).toBeDefined();
    expect(result.uf).toBe('PB');
    expect(result.localidade).toBe('Campina Grande');
    expect(result.logradouro).toBe('Rua Aprígio Veloso');
    expect(result.cep).toBe('58428-830');
});

test('busca endereço', async () => {
    const zip = new Zip();

    const fu = 'PB';
    const city = 'Campina Grande';
    const address = 'Rua Aprígio Veloso';

    const result = await zip.apiAddress(fu,city,address);

    expect(result).toBeDefined();
    expect(result[0].cep).toBe('58428-830');
    expect(result[0].logradouro).toBe('Rua Aprígio Veloso');
    expect(result[0].localidade).toBe('Campina Grande');
    expect(result[0].bairro).toBe('Bela Vista');
});