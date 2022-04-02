import MasterData from '.';
import 'regenerator-runtime/runtime';

describe('MasterData', () => {
  it('should be able to get data', async () => {
    await expect(
      MasterData.get({
        store: 'econverse',
        acronym: 'CL',
        fields: ['id', 'email'],
        where: 'email=acesso@agenciaeconverse.com.br',
      }),
    ).resolves.toHaveProperty('status', 200);
  });
});
