import { useField } from "formik";
import React, { FC, useId } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const InputField: FC<InputFieldProps> = ({
  name,
  label,
  type,
  className,
  ...restProps
}) => {
  const id = useId();
  const [field, { touched, error }] = useField(name);

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${
          error && touched ? styles.errorInput : ""
        } ${className}`}
        type={type}
        id={id}
        {...field}
        {...restProps}
      />
      {error && touched && <div className={styles.error}>{error}</div>}
    </>
  );
};
