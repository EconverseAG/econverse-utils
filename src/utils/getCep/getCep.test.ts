import getCep from '.';

describe('getCep', () => {
  it('should be able to get CEP informations', async () => {
    const cep = '01001000';
    const expected = {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107',
    };

    const result = await getCep(cep);

    expect(result).toEqual(expected);
  });
});
