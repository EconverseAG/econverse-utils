import getShelfById from '.';

describe('getShelfById', () => {
  it('should be able to get a collection shelf', async () => {
    const params = {
      productIds: [145],
      pageNumber: 1,
      pageSize: 10,
      shelfTemplateId: 'ef3fcb99-de724251-aa57-71fe5b6e149f',
    };

    const result = await getShelfById('econverse', params);

    expect(result).toBeTruthy();
  });
});
