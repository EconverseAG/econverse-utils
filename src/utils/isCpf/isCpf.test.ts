import isCpf from '.';

describe('isCpf', () => {
  it('should be able to validate a valid CPF', () => {
    const cpf = '256.960.790-83';

    expect(isCpf(cpf)).toBeTruthy();
  });
  it('should be able to validate a valid CPF without ponctuation', () => {
    const cpf = '25696079083';

    expect(isCpf(cpf)).toBeTruthy();
  });
  it('should be able to validate an invalid CPF', () => {
    const cpf = '256.960.790-84';

    expect(isCpf(cpf)).toBeFalsy();
  });
  it('should be able to validate a CPF with invalid characters', () => {
    const cpf = 'thisIsAnInvalidCPF';

    expect(isCpf(cpf)).toBeFalsy();
  });
  it('should be able to validate an empty input', () => {
    const cpf = '';

    expect(isCpf(cpf)).toBeFalsy();
  });
  it('should be able to validate a CPF with same character set', () => {
    expect(isCpf('111.111.111-11')).toBeFalsy();
    expect(isCpf('222.222.222-22')).toBeFalsy();
    expect(isCpf('333.333.333-33')).toBeFalsy();
  });
});
