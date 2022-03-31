import capitalizeFirstLetter from '.';

describe('capitalizeFirstLetter', () => {
  it('should be able to capitalize first letter', () => {
    const input = 'hello world';

    expect(capitalizeFirstLetter(input)).toBe('Hello world');
  });
  it('should be able to capitalize first letter of each word', () => {
    const input = 'hello world';

    expect(capitalizeFirstLetter(input, true)).toBe('Hello World');
  });
});
