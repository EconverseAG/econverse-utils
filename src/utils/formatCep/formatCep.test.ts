import formatCep from '.';

describe('formatCep', () => {
  it('should be able to format cep', () => {
    expect(formatCep('11740000')).toBe('11740-000');
  });
});
