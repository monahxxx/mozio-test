import { FC } from "react";
import { AddDestination } from "./AddDestination";
import { DestinationControlItem } from "./DestinationControlItem";
import styles from "./Styles.module.css";
import { ArrayHelpers, FieldArray, useField } from "formik";
import { FormValues } from "../../../types/form";
import { SyncStateWithUrl } from "../../../components/SyncStateWithUrl";

export const DestinationFields: FC = () => {
  const [{ value }] = useField<FormValues["destinations"]>("destinations");

  return (
    <div className={styles.destinations}>
      <SyncStateWithUrl name="origin">
        <DestinationControlItem label="City of origin" name="origin" />
      </SyncStateWithUrl>
      <FieldArray name="destinations">
        {({ remove, push }: ArrayHelpers) => (
          <>
            {value.map((destination, index) => (
              <SyncStateWithUrl
                name="destinations"
                key={`destination-${index}`}
              >
                <DestinationControlItem
                  label="City of destination"
                  name={`destinations.${index}`}
                  removable={value.length > 1}
                  destination={index === value.length - 1}
                  onRemove={() => remove(index)}
                />
              </SyncStateWithUrl>
            ))}
            <AddDestination onAdd={() => push("")} />
          </>
        )}
      </FieldArray>
    </div>
  );
};
