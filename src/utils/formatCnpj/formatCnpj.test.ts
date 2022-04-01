import formatCnpj from './formatCnpj';

describe('formatCnpj', () => {
  it('should be able to format a string into CNPJ', () => {
    expect(formatCnpj('90742025000153')).toBe('90.742.025/0001-53');
  });
});
