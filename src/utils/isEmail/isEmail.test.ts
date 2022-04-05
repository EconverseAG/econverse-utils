import isEmail from '.';

describe('isEmail', () => {
  it('should be able to validate an email', () => {
    expect(isEmail('test@email.com')).toBeTruthy();
  });
  it('should be able to validate an invalid email', () => {
    expect(isEmail('testemail.com')).toBeFalsy();
  });
  it('should be able to validate an email with spaces', () => {
    expect(isEmail('teste @ email. com')).toBeFalsy();
  });
  it('should be able to validate an empty email', () => {
    expect(isEmail('')).toBeFalsy();
  });
});
