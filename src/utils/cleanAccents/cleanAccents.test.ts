import cleanAccents from '.';

describe('cleanAccents', () => {
  it('should be able to clean the accents of a string', () => {
    expect(cleanAccents('açaí')).toBe('acai');
    expect(cleanAccents('ñ')).toBe('n');
    expect(cleanAccents('á')).toBe('a');
    expect(cleanAccents('é')).toBe('e');
    expect(cleanAccents('ó')).toBe('o');
    expect(cleanAccents('ú')).toBe('u');
  });
  it('should not clean other special characters', () => {
    expect(cleanAccents('exemplo@email.com')).toBe('exemplo@email.com');
  });
});
