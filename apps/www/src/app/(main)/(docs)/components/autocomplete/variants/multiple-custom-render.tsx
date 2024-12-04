import { AutocompleteChooseCountry, countries } from "./choose-country";

export const AutocompleteMultipleCustomRender = () => {
  const value = new Set(countries.map((item) => item.code).slice(0, 20));
  return (
    <AutocompleteChooseCountry
      defaultValue={value}
      isMultiple
    />
  );
};
