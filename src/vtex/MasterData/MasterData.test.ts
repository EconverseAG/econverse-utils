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
  it('should be able to create data', async () => {
    const response = await MasterData.post({
      store: 'econverse',
      acronym: 'TD',
      data: {
        email: `econverse-utils-JEST@${Date.now()}.com`,
      },
    });

    expect(response).toHaveProperty('status', 201);
  });
  it('should be able to update data', async () => {
    const response = await MasterData.put({
      store: 'econverse',
      acronym: 'TD',
      data: {
        email: `econverse-utils-JEST@${Date.now()}.com`,
      },
    });

    expect(response).toHaveProperty('status', 201);
  });
});
