import { FC, useState, useEffect, useRef } from "react";
import { InputField } from "../InputField";
import { useField } from "formik";
import styles from "./TypeaheadDropDown.module.css";
import { useOutsideClick } from "./hooks";

export interface TypeaheadOption {
  label: string;
  value: string;
}

interface TypeaheadDropDownProps {
  name: string;
  label: string;
  items: TypeaheadOption[];
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  loading: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  delay?: number;
}

export const TypeaheadDropDown: FC<TypeaheadDropDownProps> = ({
  name,
  label,
  items,
  onChange,
  onSelect,
  loading,
  isInvalid,
  errorMessage,
  delay = 300,
}) => {
  const [suggestions, setSuggestions] = useState(items);
  const [field] = useField(name);
  const lastQuery = useRef("");
  const outsideClickRef = useOutsideClick(() => {
    setSuggestions([]);
  });

  useEffect(() => {
    setSuggestions(items);
  }, [items]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const parsedValue = field.value.trim();
    if (lastQuery.current !== parsedValue) {
      timeout = setTimeout(() => onChange(parsedValue), delay);
    }
    return () => clearTimeout(timeout);
  }, [field.value, delay]);

  const selectSuggestion = (value: string) => {
    setSuggestions([]);
    lastQuery.current = value;
    onSelect(value);
  };

  return (
    <div className={styles.container} ref={outsideClickRef}>
      <InputField
        name={name}
        label={label}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
      />
      {loading && (
        <ul className={styles.list}>
          <li className={styles.skeletonItem}></li>
          <li className={styles.skeletonItem}></li>
          <li className={styles.skeletonItem}></li>
          <li className={styles.skeletonItem}></li>
          <li className={styles.skeletonItem}></li>
        </ul>
      )}
      {suggestions.length > 0 && (
        <ul className={styles.list}>
          {suggestions.map((city) => (
            <li
              className={styles.listItem}
              key={city.value}
              onClick={() => selectSuggestion(city.value)}
            >
              {city.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
