import React, { FC } from "react";
import styles from "./SearchPage.module.css";
import { Form, Formik } from "formik";
import { Button } from "../../components/Button";
import { useFormValues } from "./hooks";
import { DestinationFields } from "./DestinationFields";
import { FormFilters } from "./FormFilters";

export const SearchPage: FC = () => {
  const { initialValues, onSubmit } = useFormValues();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form} noValidate>
        <DestinationFields />
        <FormFilters />
        <Button variant="primary" type="submit" className={styles.submit}>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
