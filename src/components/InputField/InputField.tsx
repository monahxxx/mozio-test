import { useField } from "formik";
import React, { FC, useId } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

export const InputField: FC<InputFieldProps> = ({
  name,
  label,
  type,
  className,
  isInvalid,
  errorMessage,
  ...restProps
}) => {
  const id = useId();
  const [field, { touched, error }] = useField(name);
  const hasError = (touched && error) || (isInvalid && errorMessage);

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${
          hasError ? styles.errorInput : ""
        } ${className}`}
        type={type}
        id={id}
        {...field}
        {...restProps}
      />
      {hasError && <div className={styles.error}>{error ?? errorMessage}</div>}
    </>
  );
};
