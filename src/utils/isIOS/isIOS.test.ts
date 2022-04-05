import isIOS from '.';

describe('isIOS', () => {
  it('should return true if the user is using an iOS device', () => {
    const window = {
      navigator: {
        userAgent: 'Iphone',
      },
    } as Window;

    expect(isIOS(window)).toBeTruthy();
  });
  it('should return false if the user is not using an iOS device', () => {
    const window = {
      navigator: {
        userAgent: 'iOS',
      },
    } as Window;

    expect(isIOS(window)).toBeFalsy();
  });
  it('should return false if no window is provided', () => {
    expect(isIOS({} as Window)).toBeFalsy();
  });
});
