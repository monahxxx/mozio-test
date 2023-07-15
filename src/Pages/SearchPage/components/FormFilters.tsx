import { FC } from "react";
import styles from "./Styles.module.css";
import { InputField } from "../../../components/InputField";
import { NumberInput } from "../../../components/NumberInput";
import { SyncStateWithUrl } from "../../../components/SyncStateWithUrl";

export const FormFilters: FC = () => (
  <div className={styles.filters}>
    <div className={styles.formGroup}>
      <SyncStateWithUrl name="passengers">
        <NumberInput label="Passengers" name="passengers" type="number" />
      </SyncStateWithUrl>
    </div>
    <div className={styles.formGroup}>
      <SyncStateWithUrl name="date">
        <InputField label="Date" name="date" type="date" />
      </SyncStateWithUrl>
    </div>
  </div>
);
