import {AxiosRequestConfig} from "axios";
import {apiRequest} from "@/services/BaseService";
import { ICountry, CountryHoliday } from "@/types/Schedule";

export const getCountries = async (): Promise<ICountry[]> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/api/v3/AvailableCountries',
  };
  return await apiRequest<ICountry[]>(config);
};

export const getCountryHolidays = async (countryCode:string, year:number): Promise<CountryHoliday[]> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/api/v3/PublicHolidays/${year}/${countryCode}`,
  };
  return await apiRequest<CountryHoliday[]>(config);
};

export const getRandomCountriesHolidays = async (countryCode:string): Promise<CountryHoliday[]> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/api/v3/NextPublicHolidays/${countryCode}`,
  };
  return await apiRequest<CountryHoliday[]>(config);
};