import isIE9 from '.';

describe('isIE9', () => {
  it('should be able to check if the user is using Internet Explorer x.0', () => {
    const window = {
      navigator: {
        userAgent: 'msie',
      },
    } as Window;

    expect(isIE9(window)).toBeFalsy();
  });
  it('should be able to check if the user is using Internet Explorer 9.0', () => {
    const window = {
      navigator: {
        userAgent: 'msie 9.0',
      },
    } as Window;

    expect(isIE9(window)).toBeTruthy();
  });
  it('should be able to check if the user is not using Internet Explorer', () => {
    const window = {
      navigator: {
        userAgent: 'chrome',
      },
    } as Window;

    expect(isIE9(window)).toBeFalsy();
  });
  it('should return false if no window is provided', () => {
    expect(isIE9({} as Window)).toBeFalsy();
  });
});
