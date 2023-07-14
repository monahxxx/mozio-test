import React, { FC } from "react";
import { NumberInput } from "../../components/NumberInput";
import styles from "./SearchPage.module.css";
import { DestinationControlItem } from "./DestinationControlItem";
import { Form, Formik } from "formik";
import { InputField } from "../../components/InputField";
import { AddDestination } from "./AddDestination";
import { Button } from "../../components/Button";

export const SearchPage: FC = () => {
  return (
    <Formik
      initialValues={{
        origin: "",
        destination1: "",
        destination2: "",
        passengers: 0,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form} noValidate>
        <div className={styles.destinations}>
          <DestinationControlItem label="City of origin" name="origin" />
          <DestinationControlItem
            label="City of destination"
            name="destination1"
            removable
            onRemove={() => {}}
          />
          <DestinationControlItem
            label="City of destination"
            name="destination2"
            removable
            onRemove={() => {}}
            destination
          />
          <AddDestination onAdd={() => {}} />
        </div>
        <div className={styles.filters}>
          <div className={styles.formGroup}>
            <NumberInput label="Passengers" name="passengers" type="number" />
          </div>
          <div className={styles.formGroup}>
            <InputField label="Date" name="date" type="date" />
          </div>
        </div>
        <Button variant="primary" type="submit" className={styles.submit}>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
