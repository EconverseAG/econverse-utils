import getProductSuggestions from './getProductSuggestions';

describe('getProductSuggestions', () => {
  it('should be able to get a product suggestions', async () => {
    const suggestions = await getProductSuggestions('econverse', 25);

    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions[0]).toHaveProperty('productName');
  });
  it('should be able to return no suggestions', async () => {
    const suggestions = await getProductSuggestions('econverse', 1);

    expect(suggestions).toEqual([]);
  });
});
