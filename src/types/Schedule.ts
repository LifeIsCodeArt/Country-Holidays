export type { ICountry, CountryHoliday };

type ICountry = {
  countryCode: "string",
  name: "string"
}

type CountryHoliday = {
  date: string,
  localName: string,
  name: string,
  countryCode: string,
  fixed: boolean,
  global: boolean,
  counties?: null,
  launchYear?: null,
  types: string[]
}