import axios from 'axios';

/**
 * Gets a SKU information given its ID.
 * @since 1.1.0
 * @param {string} store VTEX store name (account name).
 * @param {string | number} sku SKU.
 * @returns {Promise<Object>} Promise for list of product suggestions.
 */
async function getSkuById(
  store: string,
  sku: string | number,
): Promise<Object> {
  const url = `https://${store}.myvtex.com/api/catalog_system/pub/products/search?fq=skuId:${sku}`;

  const { data } = await axios.get(url);

  return data[0];
}

export { getSkuById };
