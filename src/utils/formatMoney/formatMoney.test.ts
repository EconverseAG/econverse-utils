import formatMoney from '.';

describe('formatMoney', () => {
  it('should be able to format a number to money', () => {
    expect(formatMoney(1)).toBe('R$ 0,01');
    expect(formatMoney(1.5)).toBe('R$ 0,01');
    expect(formatMoney(10)).toBe('R$ 0,10');
    expect(formatMoney(100)).toBe('R$ 1,00');
    expect(formatMoney(5000)).toBe('R$ 50,00');
  });
  it('should be able to format number with different bases', () => {
    expect(formatMoney(100, 1)).toBe('R$ 100,00');
    expect(formatMoney(100, 10)).toBe('R$ 10,00');
    expect(formatMoney(100, 100)).toBe('R$ 1,00');
    expect(formatMoney(100, 1000)).toBe('R$ 0,10');
  });
});
