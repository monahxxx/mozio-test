import { cities } from "../../../mocks/cities";

const SEARCH_DELAY = 500;
const FAILED_QUERY = "fail";

type responseType = typeof cities;

export const fetchSuggestions = (query: string) => {
  return new Promise<responseType>((resolve, reject) => {
    setTimeout(() => {
      if (query.toLocaleLowerCase() === FAILED_QUERY) {
        reject("Oops! Failed to serch this keyword.");
      }
      const filteredCities = cities.filter((x) =>
        x[0].toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
      );
      resolve(filteredCities);
    }, SEARCH_DELAY);
  });
};
