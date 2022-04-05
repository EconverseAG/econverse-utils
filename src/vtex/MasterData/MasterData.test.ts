import MasterData from '.';
import 'regenerator-runtime/runtime';

describe('MasterData', () => {
  it('should be able to get data', async () => {
    const result = await MasterData.get({
      store: 'econverse',
      acronym: 'CL',
      fields: ['id', 'email'],
      where: 'email=acesso@agenciaeconverse.com.br',
    });

    expect(result[0]).toHaveProperty('email', 'acesso@agenciaeconverse.com.br');
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
});
