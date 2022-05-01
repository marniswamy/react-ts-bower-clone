export const getOwnerNameHelper = (repoUrl: string) => {
  return repoUrl.split("/")[3];
};
