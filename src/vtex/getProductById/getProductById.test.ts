import getProductById from '.';
import 'regenerator-runtime/runtime';

describe('getProductById', () => {
  it('should be able to get a product', async () => {
    const product = await getProductById('puket', 31911);

    expect(product).toHaveProperty('productName');
  });
});
