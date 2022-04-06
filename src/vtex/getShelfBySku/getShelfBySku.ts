import axios from 'axios';
import { ISearchParams } from './getShelfBySku.types';

/**
 * Gets product shelf for given SKUs.
 * @since 1.1.0
 * @param {string} store VTEX store name (account name).
 * @param {ISearchParams} params Params object.
 * @returns {Promise<any>} Promise for shelf HTML string.
 */
async function getShelfBySku(
  store: string,
  { skus, pageSize, pageNumber, shelfTemplateId, order }: ISearchParams,
): Promise<any> {
  const skuParams = skus.join('&fq=skuId:');

  const paramsList = [
    `fq=skuId:${skuParams}`,
    `sl=${shelfTemplateId}`,
    `PageNumber=${pageNumber || 1}`,
    'sm=0',
  ];

  if (pageSize) paramsList.push(`PS=${pageSize}`);
  if (order) paramsList.push(`O=${order}`);

  const url = `https://${store}.myvtex.com/buscapagina?${paramsList.join('&')}`;

  const { data } = await axios.get(url);

  return data;
}

export { getShelfBySku };
