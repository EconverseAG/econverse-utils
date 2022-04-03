import isAndroid from './isAndroid';

describe('isAndroid', () => {
  it('should return true if the user is using an Android device', () => {
    const window = {
      navigator: {
        userAgent: 'Android',
      },
    } as Window;

    expect(isAndroid(window)).toBeTruthy();
  });
  it('should return false if the user is not using an Android device', () => {
    const window = {
      navigator: {
        userAgent: 'iOS',
      },
    } as Window;

    expect(isAndroid(window)).toBeFalsy();
  });
  it('should return false if no window is provided', () => {
    expect(isAndroid({} as Window)).toBeFalsy();
  });
});
