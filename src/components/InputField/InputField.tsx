import { useField } from "formik";
import React, { FC, useId } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const InputField: FC<InputFieldProps> = ({
  name,
  label,
  type,
  ...restProps
}) => {
  const id = useId();
  const [field] = useField(name);

  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        {...field}
        {...restProps}
      />
    </>
  );
};
