import { useField } from "formik";
import React, { FC, useId } from "react";
import styles from "./NumberInput.module.css";

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const NumberInput: FC<NumberInputProps> = ({
  label,
  name,
  ...restProps
}) => {
  const id = useId();
  const [field, , { setValue }] = useField(name);

  const decreaseHandler = () => {
    if (field.value > 0) {
      setValue(field.value - 1);
    }
  };

  const increaseHandler = () => {
    setValue(field.value + 1);
  };

  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <div className={styles.inputContainer}>
        <span className={styles.decrease} onClick={decreaseHandler}></span>
        <input
          className={`${styles.input} ${styles.inputOverrides}`}
          type="number"
          id={id}
          {...field}
          {...restProps}
        />
        <span className={styles.increase} onClick={increaseHandler}></span>
      </div>
    </>
  );
};
