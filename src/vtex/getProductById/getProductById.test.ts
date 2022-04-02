import getProductById from '.';
import 'regenerator-runtime/runtime';

describe('getProductById', () => {
  it('should be able to get a product', async () => {
    const product = await getProductById('econverse', 25);

    expect(product).toHaveProperty('productName');
  });
});
