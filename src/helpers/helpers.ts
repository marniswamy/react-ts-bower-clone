import { SORTING_VALUES } from "../constants/SORTING_VALUES";

export const compare = (a: any, b: any) => {
  const prev = a.stars;
  const next = b.stars;

  if (prev > next) {
    return 1;
  }
  if (prev < next) {
    return -1;
  }
  return 0;
};

export const sortDataBySortType = (data = [], sortType: string) => {
  if (sortType === SORTING_VALUES.ASCENDING) {
    return data.sort(compare);
  }

  if (sortType === SORTING_VALUES.DESCENDING) {
    return data.sort(compare).reverse();
  }

  return data;
};

export const getOwnerNameHelper = (repoUrl: string) => {
  return repoUrl.split("/")[3];
};
