import { SORTING_VALUES } from "../constants/SORTING_VALUES";

/**
 * getOwnerNameHelper is used to get the name from the github url
 *
 * @param repoUrl - github url as param
 * @returns the owner name of the repo
 */
export const getOwnerNameHelper = (repoUrl: string) => {
  return repoUrl.split("/")[3];
};

/**
 * getPageTitle helper is used to get the header title
 * dynamically based on the page we are in
 *
 * @returns the string
 */
export const getPageTitle = () => {
  const { pathname } = window.location;
  const onSearchPage = pathname.includes("/search");
  return onSearchPage ? "Bower Search" : "Bower Packages";
};

/**
 * compare method is used to compare the values for sorting method
 *
 * @param a is the prev value of starts in this case
 * @param b is the next value of starts in this case
 * @returns the number
 */
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

/**
 * sortDataBySortType method is used to sort the arraz of data
 * based on flag ASC or DSC
 *
 * @param data - array of objects as param
 * @param sortType - tzpe of sort ASC or DSC
 * @returns - retuns the arrz with sorted by given param
 */
export const sortDataBySortType = (data = [], sortType: string) => {
  if (sortType === SORTING_VALUES.ASCENDING) {
    return data.sort(compare);
  }

  if (sortType === SORTING_VALUES.DESCENDING) {
    return data.sort(compare).reverse();
  }

  return data;
};
