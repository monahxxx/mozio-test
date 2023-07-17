import React, { FC } from "react";
import styles from "./ItineraryDetails.module.css";

interface ItineraryDetailsProps {
  totalDistance: number;
  passengers: string | null;
  date: string | null;
}

export const ItineraryDetails: FC<ItineraryDetailsProps> = ({
  totalDistance,
  passengers,
  date,
}) => {
  const formattedDate = date ? new Date(date).toDateString() : null;

  return (
    <>
      <div className={styles.dataItem}>
        <span className={styles.highlight}>{totalDistance.toFixed(2)} km</span>{" "}
        is total distance
      </div>
      <div className={styles.dataItem}>
        <span className={styles.highlight}>{passengers}</span> passengers
      </div>
      <div className={`${styles.highlight} ${styles.dataItem}`}>
        {formattedDate}
      </div>
    </>
  );
};
