import { useField } from "formik";
import { useState } from "react";
import { cities } from "../../../mocks/cities";
import { TypeaheadOption } from "../../../components/TypeaheadDropDown";

const SEARCH_DELAY = 500;
const FAILED_QUERY = "fail";

type responseType = typeof cities;

const fetchSuggestions = (query: string) => {
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

export const useTypeaheadSearch = (field: string) => {
  const [, , { setValue }] = useField(field);
  const [items, setItems] = useState<TypeaheadOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onSearch = (query: string) => {
    setError(undefined);
    if (query.length > 0) {
      setIsLoading(true);
      fetchSuggestions(query)
        .then((response) => {
          setItems(
            response.map((x) => ({
              label: x[0],
              value: x[0],
            }))
          );
        })
        .catch((e) => setError(e))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setItems([]);
    }
  };

  return {
    items,
    onSearch,
    setValue,
    isLoading,
    error,
  };
};
