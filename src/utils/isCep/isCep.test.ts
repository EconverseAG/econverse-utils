import isCep from './isCep';

describe('isCep', () => {
  it('should be able to validate a CEP without ponctuation', () => {
    expect(isCep('11740000')).toBe(true);
  });
  it('should be able to validate a CEP with ponctuation', () => {
    expect(isCep('11740-000')).toBe(true);
  });
  it('should be able to validate an invalid CEP', () => {
    expect(isCep('01001')).toBe(false);
  });
  it('should be able to validate an empty input', () => {
    expect(isCep('')).toBe(false);
  });
});
