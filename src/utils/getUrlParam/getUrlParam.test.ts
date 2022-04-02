import getUrlParam from './getUrlParam';

describe('getUrlParam', () => {
  it('should be able to get a url parameter', () => {
    const url = 'http://localhost:8080/?param=value';
    const param = 'param';
    const expected = 'value';

    expect(getUrlParam(url, param)).toBe(expected);
  });
  it('should be able to get a url parameter when many parameters are specified', () => {
    const url = 'http://localhost:8080/?param=value&param2=value2';
    const param = 'param2';
    const expected = 'value2';

    expect(getUrlParam(url, param)).toBe(expected);
  });
  it('should return an empty string if no url parameter is found', () => {
    const url = 'http://localhost:8080/?param=value';
    const param = 'param2';
    const expected = '';

    expect(getUrlParam(url, param)).toBe(expected);
  });
});
