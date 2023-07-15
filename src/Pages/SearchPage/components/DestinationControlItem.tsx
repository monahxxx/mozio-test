import React, { FC } from "react";
import styles from "./Styles.module.css";
import { Button } from "../../../components/Button";
import { ReactComponent as DeleteIcon } from "../../../icons/delete.svg";
import { TypeaheadDropDown } from "../../../components/TypeaheadDropDown";
import { useTypeaheadSearch } from "./hooks";

interface DestinationControlItemProps {
  label: string;
  name: string;
  removable?: boolean;
  onRemove?: () => void;
  destination?: boolean;
}

export const DestinationControlItem: FC<DestinationControlItemProps> = ({
  label,
  name,
  removable = false,
  onRemove,
  destination = false,
}) => {
  const { onSearch, items, setValue, isLoading, error } =
    useTypeaheadSearch(name);

  return (
    <div className={styles.item}>
      <div className={styles.formGroup}>
        <TypeaheadDropDown
          name={name}
          label={label}
          onChange={onSearch}
          onSelect={(newValue) => setValue(newValue)}
          loading={isLoading}
          items={items}
          isInvalid={Boolean(error)}
          errorMessage={error}
        />
      </div>
      {removable && (
        <div className={styles.actions}>
          <Button
            variant="text"
            type="button"
            className={styles.deleteIcon}
            title="Remove destination"
            onClick={onRemove}
          >
            <DeleteIcon />
          </Button>
        </div>
      )}
      {!destination && (
        <>
          <div className={styles.step} />
          <div className={styles.connector} />
        </>
      )}
      {destination && <div className={styles.destination} />}
    </div>
  );
};
