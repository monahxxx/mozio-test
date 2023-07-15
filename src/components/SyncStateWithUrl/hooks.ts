import { useSearchParams } from "react-router-dom";
import { removeEmptyProps } from "./helpers";

export const useSearchParamsState = (
  name: string
): [
  searchParamsState: string,
  setSearchParamsState: (newState: string) => void
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsState = searchParams.get(name) ?? "";

  const setSearchParamsState = (newState: string) => {
    const next = Object.assign(
      {},
      Array.from(searchParams.entries()).reduce((o, [key, value]) => {
        return {
          ...o,
          [key]: value,
        };
      }, {}),
      { [name]: Array.isArray(newState) ? newState.join(",") : newState }
    );
    setSearchParams(removeEmptyProps(next));
  };

  return [searchParamsState, setSearchParamsState];
};
