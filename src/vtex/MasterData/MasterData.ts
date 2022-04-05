import axios from 'axios';
import { IPostParams, IGetParams } from './MasterData.types';

const MasterData = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.vtex.ds.v10+json',
  },
  /**
   * Gets data from Master Data.
   * @since 0.3.0
   * @param {IGetParams} params Params object.
   * @returns {Promise<any>} Promise for requested data.
   */
  get: async ({
    store,
    acronym,
    fields,
    where,
    useSafeData,
  }: IGetParams): Promise<any> => {
    const fieldsParam = `_fields=${fields.join(',')}`;
    const versionParam = `_v=${Date.now()}`;
    const apiPath = useSafeData ? 'io/safedata' : 'dataentities';
    const url = `https://${store}.myvtex.com/api/${apiPath}/${acronym}/search?${where}&${fieldsParam}&${versionParam}`;

    const { data } = await axios.get(url, {
      headers: MasterData.headers,
    });

    return data;
  },
  /**
   * Posts data to Master Data.
   * @since 0.3.0
   * @param {IPostParams} params Params object
   * @returns {Promise<any>} Promise for posted data.
   */
  post: ({ store, acronym, data }: IPostParams): Promise<any> => {
    return axios.post(
      `https://${store}.myvtex.com/api/dataentities/${acronym}/documents`,
      data,
      {
        headers: MasterData.headers,
      },
    );
  },
};

export { MasterData };
