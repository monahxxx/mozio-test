import { useField } from "formik";
import { useState } from "react";
import { TypeaheadOption } from "../../../components/TypeaheadDropDown";
import { fetchSuggestions } from "./api";

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
