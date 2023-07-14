import { FC } from "react";
import styles from "./SearchPage.module.css";
import { InputField } from "../../components/InputField";
import { NumberInput } from "../../components/NumberInput";

export const FormFilters: FC = () => (
  <div className={styles.filters}>
    <div className={styles.formGroup}>
      <NumberInput label="Passengers" name="passengers" type="number" />
    </div>
    <div className={styles.formGroup}>
      <InputField label="Date" name="date" type="date" />
    </div>
  </div>
);
