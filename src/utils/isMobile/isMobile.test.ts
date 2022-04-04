import isMobile from './isMobile';

describe('isMobile', () => {
  it('should be able to check if user is using a mobile screen', () => {
    const window = {
      innerWidth: 768,
    } as Window;

    expect(isMobile(window)).toBeTruthy();
  });
  it('should be able to check if user is not using a mobile screen', () => {
    const window = {
      innerWidth: 1024,
    } as Window;

    expect(isMobile(window)).toBeFalsy();
  });
  it('should be able to check if user is using a mobile screen with custom width', () => {
    const window = {
      innerWidth: 980,
    } as Window;

    expect(isMobile(window, 1024)).toBeTruthy();
  });
});
