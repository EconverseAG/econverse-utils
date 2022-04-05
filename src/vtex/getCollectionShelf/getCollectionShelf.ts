import axios from 'axios';
import { ISearchParams } from './getCollectionShelf.types';

/**
 * Gets shelf HTML for a given collection.
 * @since 0.7.0
 * @param {string} store VTEX store name (account name).
 * @param {ISearchParams} params Params object.
 * @returns {Promise<any>} Promise for search result in HTML.
 */
async function getCollectionShelf(
  store: string,
  { collectionId, pageSize, pageNumber, shelfTemplateId, order }: ISearchParams,
): Promise<any> {
  const paramsList = [
    `fq=H:${collectionId}`,
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

export { getCollectionShelf };
