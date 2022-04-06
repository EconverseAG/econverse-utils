interface ISearchParams {
  productIds: string[] | number[];
  pageSize: number | string;
  pageNumber: number | string;
  shelfTemplateId: string;
  order?: string;
}

export type { ISearchParams };
