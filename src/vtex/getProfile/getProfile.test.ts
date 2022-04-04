import getProfile from './getProfile';

describe('getProfile', () => {
  it('should be able to get current user profile', async () => {
    const profile = await getProfile('econverse');

    expect(profile).toBeDefined();
  });
});
