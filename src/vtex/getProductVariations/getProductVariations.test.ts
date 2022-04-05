import getProductVariations from '.';

describe('getProductVariations', () => {
  it('should be able to get product variants', async () => {
    const variants = await getProductVariations('econverse', 25);

    expect(variants).toHaveProperty('skus');
  });
});
