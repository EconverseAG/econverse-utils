import MasterData from '.';
import 'regenerator-runtime/runtime';

describe('MasterData', () => {
  it('should be able to request data', async () => {
    await expect(
      MasterData.get({
        store: 'lilibee',
        acronym: 'CL',
        fields: ['id', 'email'],
        where: 'email=teste@teste.com.br',
      }),
    ).resolves.toHaveProperty('status', 200);
  });
});
