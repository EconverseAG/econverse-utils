import cpfIsValid from './cpfIsValid';

describe('cpfIsValid', () => {
  it('should be able to validate a valid CPF', () => {
    const cpf = '256.960.790-83';

    expect(cpfIsValid(cpf)).toBeTruthy();
  });
  it('should be able to validate a valid CPF without ponctuation', () => {
    const cpf = '25696079083';

    expect(cpfIsValid(cpf)).toBeTruthy();
  });
  it('should be able to validate an invalid CPF', () => {
    const cpf = '256.960.790-84';

    expect(cpfIsValid(cpf)).toBeFalsy();
  });
  it('should be able to validate a CPF with invalid characters', () => {
    const cpf = 'thisIsAnInvalidCPF';

    expect(cpfIsValid(cpf)).toBeFalsy();
  });
  it('should be able to validate an empty input', () => {
    const cpf = '';

    expect(cpfIsValid(cpf)).toBeFalsy();
  });
  it('should be able to validate a CPF with same character set', () => {
    expect(cpfIsValid('111.111.111-11')).toBeFalsy();
    expect(cpfIsValid('222.222.222-22')).toBeFalsy();
    expect(cpfIsValid('333.333.333-33')).toBeFalsy();
  });
});
