import axios from 'axios';

/**
 * Gets a list of a product suggestions.
 * @since 0.7.0
 * @param {string} store VTEX store name (account name).
 * @param {string | number} productId Product ID.
 * @returns {Object[]} List of product suggestions.
 */
async function getProductSuggestions(
  store: string,
  productId: string | number,
): Promise<Object[]> {
  const url = `https://${store}.myvtex.com/api/catalog_system/pub/products/crossselling/suggestions/${productId}`;

  const { data } = await axios.get(url);

  return data;
}

export default getProductSuggestions;
