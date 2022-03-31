interface IMasterDataBaseParams {
  store: string;
  acronym: string;
}

interface IPostParams extends IMasterDataBaseParams {
  data: Object;
}

interface IGetParams extends IMasterDataBaseParams {
  fields: string[];
  where: string;
  useSafeData?: boolean;
}

export type { IMasterDataBaseParams, IPostParams, IGetParams };
