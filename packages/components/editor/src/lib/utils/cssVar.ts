export const cssVar = (name: string, value?: string) => {
  let currentName = name;
  if (!name.startsWith("--")) {
    currentName = `--${currentName}`;
  }

  if (value) {
    document.documentElement.style.setProperty(currentName, value);
  }

  return getComputedStyle(document.body).getPropertyValue(currentName);
};

export default cssVar;
