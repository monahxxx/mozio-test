import { useField } from "formik";
import { useState } from "react";
import { cities } from "../../../mocks/cities";
import { TypeaheadOption } from "../../../components/TypeaheadDropDown";

const SEARCH_DELAY = 300;

export const useTypeaheadSearch = (field: string) => {
  const [, , { setValue }] = useField(field);
  const [items, setItems] = useState<TypeaheadOption[]>([]);

  const onSearch = (query: string) => {
    if (query.length > 0) {
      setTimeout(() => {
        const filteredCities = cities.filter((x) =>
          x[0].toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
        );
        setItems(
          filteredCities.map((x) => ({
            label: x[0],
            value: x[0],
          }))
        );
      }, SEARCH_DELAY);
    } else {
      setItems([]);
    }
  };

  return {
    items,
    onSearch,
    setValue,
  };
};
