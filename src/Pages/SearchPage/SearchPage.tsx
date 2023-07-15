import React, { FC } from "react";
import styles from "./SearchPage.module.css";
import { Form, Formik } from "formik";
import { Button } from "../../components/Button";
import { useFormValues } from "./hooks";
import { DestinationFields } from "./components/DestinationFields";
import { FormFilters } from "./components/FormFilters";
import { validationSchema } from "./validation";

export const SearchPage: FC = () => {
  const { initialValues, onSubmit } = useFormValues();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
