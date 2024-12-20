import { getGithubStarsCount } from "../../actions";

export const GithubStarsCount = async () => {
  const count = await getGithubStarsCount();
  return count;
};
