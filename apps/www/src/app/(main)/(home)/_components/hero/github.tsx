import { getGithubStarsCount, getLatestVersion } from "../../actions";

export const GithubStarsCount = async () => {
  const count = await getGithubStarsCount();
  return count;
};

export const ReactPackageVersion = async () => {
  const version = await getLatestVersion();
  return version;
};
