import { useField } from "formik";
import { useState } from "react";
import { cities } from "../../../mocks/cities";
import { TypeaheadOption } from "../../../components/TypeaheadDropDown";

const SEARCH_DELAY = 500;

type responseType = typeof cities;

const fetchSuggestions = (query: string) => {
  return new Promise<responseType>((resolve, reject) => {
    setTimeout(() => {
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

  const onSearch = (query: string) => {
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
  };
};
