import isCnpj from '.';

describe('isCnpj', () => {
  it('should be able to validate a valid CNPJ', () => {
    const cnpj = '50.812.421/0001-95';

    expect(isCnpj(cnpj)).toBe(true);
  });
  it('should be able to validate a valid CNPJ without ponctuation', () => {
    const cnpj = '50812421000195';

    expect(isCnpj(cnpj)).toBe(true);
  });
  it('should be able to validate an invalid CNPJ', () => {
    const cnpj = '50.812.421/0001-96';

    expect(isCnpj(cnpj)).toBe(false);
  });
  it('should be able to validate a CNPJ with invalid characters', () => {
    const cnpj = 'thisIsAnInvalidCNPJ';

    expect(isCnpj(cnpj)).toBe(false);
  });
  it('should be able to validate an empty input', () => {
    const cnpj = '';

    expect(isCnpj(cnpj)).toBe(false);
  });
  it('should be able to validate a CNPJ with same character set', () => {
    expect(isCnpj('11.111.111/1111-11')).toBe(false);
    expect(isCnpj('22.222.222/2222-22')).toBe(false);
    expect(isCnpj('33.333.333/3333-33')).toBe(false);
    expect(isCnpj('44.444.444/4444-44')).toBe(false);
    expect(isCnpj('55.555.555/5555-55')).toBe(false);
  });
});
