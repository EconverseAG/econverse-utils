import bytesToSize from './bytesToSize';

describe('bytesToSize', () => {
  it('should be able to return decimals', () => {
    expect(bytesToSize(152004)).toBe('148.4 KB');
  });
  it('should be able to return B', () => {
    expect(bytesToSize(682)).toBe('682 B');
  });
  it('should be able to return KB', () => {
    expect(bytesToSize(1024)).toBe('1.0 KB');
  });
  it('should be able to return MB', () => {
    expect(bytesToSize(1048576)).toBe('1.0 MB');
  });
  it('should be able to return GB', () => {
    expect(bytesToSize(1073741824)).toBe('1.0 GB');
  });
  it('should be able to return TB', () => {
    expect(bytesToSize(1199511627776)).toBe('1.1 TB');
  });
});
