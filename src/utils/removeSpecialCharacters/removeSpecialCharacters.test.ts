import removeSpecialCharacters from '.';

describe('removeSpecialCharacters', () => {
  it('should be able to remove special characters', () => {
    expect(removeSpecialCharacters('açaí@')).toBe('aa');
  });
  it('should be able to remove special characters leaving empty space', () => {
    expect(removeSpecialCharacters('açaí@', true)).toBe('a a  ');
  });
});
