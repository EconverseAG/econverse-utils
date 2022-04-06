import axios from 'axios';
import { ISearchParams } from './getCollectionShelf.types';

/**
 * Gets shelf HTML for a given collection.
 * @since 0.7.0
 * @param {string} store VTEX store name (account name).
 * @param {Object} params Params object.
 * @param {number | string} params.collectionId Collection ID.
 * @param {number | string} params.pageSize Products per page.
 * @param {number | string} params.pageNumber Page Number.
 * @param {string} params.shelfTemplateId Shelf template ID.
 * @param {string} params.order Ordering method.
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
