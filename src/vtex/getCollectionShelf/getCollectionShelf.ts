import axios from 'axios';
import { ISearchParams } from './getCollectionShelf.types';

async function getCollectionShelf(
  store: string,
  { collectionId, pageSize, pageNumber, shelfTemplateId, order }: ISearchParams,
) {
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
