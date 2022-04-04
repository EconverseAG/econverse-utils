import axios from 'axios';

/**
 * Gets product variations (SKUs).
 * @since 0.7.0
 * @param {string} store VTEX store name (account name).
 * @param {string | number} productId Product ID.
 * @returns {Object} Product informations and its variations.
 */
async function getProductVariations(
  store: string,
  productId: string | number,
): Promise<Object> {
  const url = `https://${store}.myvtex.com/api/catalog_system/pub/products/variations/${productId}`;

  const { data } = await axios.get(url);

  return data;
}

export default getProductVariations;
