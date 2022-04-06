import getSkuById from '.';
import 'regenerator-runtime/runtime';

describe('getSkuById', () => {
  it('should be able to get a product', async () => {
    const sku = await getSkuById('econverse', 54);

    expect(sku).toHaveProperty('items');
  });
});
