import axios from 'axios';
import { IPostParams, IGetParams } from './MasterData.types';

const MasterData = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.vtex.ds.v10+json',
  },
  get: ({ store, acronym, fields, where, useSafeData }: IGetParams) => {
    const fieldsParam = `_fields=${fields.join(',')}`;
    const apiPath = useSafeData ? 'io/safedata' : 'dataentities';
    const url = `https://${store}.myvtex.com/api/${apiPath}/${acronym}/search?${where}&${fieldsParam}}`;

    return axios.get(url, {
      headers: MasterData.headers,
    });
  },
  post: ({ store, acronym, data }: IPostParams) => {
    return axios.post(
      `https://${store}.myvtex.com/api/dataentities/${acronym}/documents`,
      data,
      {
        headers: MasterData.headers,
      },
    );
  },
  put: ({ store, acronym, data }: IPostParams) => {
    return axios.put(
      `https://${store}.myvtex.com/api/dataentities/${acronym}/documents`,
      data,
      {
        headers: MasterData.headers,
      },
    );
  },
  patch: ({ store, acronym, data }: IPostParams) => {
    return axios.patch(
      `https://${store}.myvtex.com/api/dataentities/${acronym}/documents`,
      data,
      {
        headers: MasterData.headers,
      },
    );
  },
};

export default MasterData;
