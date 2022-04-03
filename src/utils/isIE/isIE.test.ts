import isIE from './isIE';

describe('isIE', () => {
  it('should be able to check if the user is using Internet Explorer', () => {
    const window = {
      navigator: {
        userAgent: 'msie',
      },
    } as Window;

    expect(isIE(window)).toBeTruthy();
  });
  it('should be able to check if the user is using Internet Explorer 9.0', () => {
    const window = {
      navigator: {
        userAgent: 'msie 9.0',
      },
    } as Window;

    expect(isIE(window)).toBeTruthy();
  });
  it('should be able to check if the user is not using Internet Explorer', () => {
    const window = {
      navigator: {
        userAgent: 'chrome',
      },
    } as Window;

    expect(isIE(window)).toBeFalsy();
  });
  it('should return false if no window is provided', () => {
    expect(isIE({} as Window)).toBeFalsy();
  });
});
