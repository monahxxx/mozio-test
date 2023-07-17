import React, { FC } from "react";
import styles from "./AddDestination.module.css";
import { Button } from "../../../../components/Button";
import { ReactComponent as AddIcon } from "../../../../icons/add.svg";

interface AddDestinationProps {
  onAdd: () => void;
}

export const AddDestination: FC<AddDestinationProps> = ({ onAdd }) => (
  <div className={styles.container}>
    <Button variant="text" type="button" onClick={onAdd}>
      Add destination
    </Button>
    <Button
      variant="text"
      type="button"
      className={styles.addIcon}
      title="Add destination"
    >
      <AddIcon onClick={onAdd} />
    </Button>
  </div>
);
