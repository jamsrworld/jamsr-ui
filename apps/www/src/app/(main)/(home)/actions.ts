export const getGithubStarsCount = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/jamsrworld/jamsr-ui",
      {
        next: {
          revalidate: 60,
        },
      },
    );
    const data = (await response.json()) as { stargazers_count: number };
    return data.stargazers_count;
  } catch {
    return 0;
  }
};

export const getLatestVersion = async () => {
  try {
    const url = "https://registry.npmjs.org/@jamsr-ui/react/latest";
    const response = await fetch(url);
    const data = (await response.json()) as { version: string };
    return data.version;
  } catch {
    return "0.0.0";
  }
};
