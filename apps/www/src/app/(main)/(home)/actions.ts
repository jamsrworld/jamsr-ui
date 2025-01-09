export const getGithubStarsCount = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/jamsrworld/jamsr-ui",
      {
        cache: "no-store",
      },
    );
    const data = (await response.json()) as { stargazers_count: number };
    return data.stargazers_count;
  } catch {
    return 0;
  }
};
