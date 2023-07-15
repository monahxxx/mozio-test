import React, { FC } from "react";
import styles from "./SearchPage.module.css";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";

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
}) => (
  <div className={styles.item}>
    <div className={styles.formGroup}>
      <InputField type="text" name={name} label={label} />
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
