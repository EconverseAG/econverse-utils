import textEllipsis from '.';

const input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('textEllipsis', () => {
  it('should be able to insert ellipsis to text', () => {
    expect(textEllipsis(input, 20)).toBe('Lorem ipsum dolor si...');
    expect(textEllipsis(input, 21)).toBe('Lorem ipsum dolor sit...');
  });
  it('should not allow space between text and ellipsis', () => {
    expect(textEllipsis(input, 21)).toBe('Lorem ipsum dolor sit...');
    expect(textEllipsis(input, 22)).toBe('Lorem ipsum dolor sit...');
    expect(textEllipsis(input, 23)).toBe('Lorem ipsum dolor sit a...');
  });
  it('should not insert ellipsis when limit covers input', () => {
    expect(textEllipsis(input, input.length)).toBe(input);
  });
  it('should be able to receive a custom trail', () => {
    expect(textEllipsis(input, 20, '...')).toBe('Lorem ipsum dolor si...');
    expect(textEllipsis(input, 20, '-')).toBe('Lorem ipsum dolor si-');
    expect(textEllipsis(input, 20, '..')).toBe('Lorem ipsum dolor si..');
    expect(textEllipsis(input, 20, '.....')).toBe('Lorem ipsum dolor si.....');
  });
});
