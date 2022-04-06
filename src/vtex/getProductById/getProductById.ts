import axios from 'axios';

/**
 * Gets a product information given its ID.
 * @since 0.3.0
 * @param {string} store VTEX store name (account name).
 * @param {string | number} productId Product ID.
 * @returns {Promise<Object>} Promise for list of product suggestions.
 */
async function getProductById(
  store: string,
  productId: string | number,
): Promise<Object> {
  const url = `https://${store}.myvtex.com/api/catalog_system/pub/products/search?fq=productId:${productId}`;

  const { data } = await axios.get(url);

  return data[0];
}

export { getProductById };
