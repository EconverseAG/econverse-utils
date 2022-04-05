import getCnpj from '.';

describe('getCnpj', () => {
  it('should be able to get CNPJ informations given a formatted string', async () => {
    const cnpj = '38.154.494/0001-31';
    const expected = 'ESOLUTION PERFORMANCE DIGITAL LTDA';

    const result = await getCnpj(cnpj);

    expect(result).toHaveProperty('nome', expected);
  });
  it('should be able to get CNPJ informations given an unformatted string', async () => {
    const cnpj = '38154494000131';
    const expected = 'ESOLUTION PERFORMANCE DIGITAL LTDA';

    const result = await getCnpj(cnpj);

    expect(result).toHaveProperty('nome', expected);
  });
});
