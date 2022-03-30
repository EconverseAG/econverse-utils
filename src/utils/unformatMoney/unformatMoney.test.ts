import unformatMoney from './unformatMoney';

describe('unformatMoney', () => {
  it('should be able to format a number to money', () => {
    expect(unformatMoney('R$ 1,00')).toBe(100);
    expect(unformatMoney('R$ 2,90')).toBe(290);
    expect(unformatMoney('R$10')).toBe(1000);
    expect(unformatMoney('R$2.09')).toBe(209);
  });
  it('should be able to format number with different bases', () => {
    expect(unformatMoney('R$ 100,00', 1)).toBe(100);
    expect(unformatMoney('R$ 100,00', 10)).toBe(1000);
    expect(unformatMoney('R$ 100,00', 100)).toBe(10000);
    expect(unformatMoney('R$ 100,00', 1000)).toBe(100000);
  });
});
