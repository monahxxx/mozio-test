import React, { FC } from "react";
import styles from "./Itinerary.module.css";
import { Leg } from "../../../../types/distance";

interface ItineraryProps {
  origin: string;
  legs: Leg[];
}

export const Itinerary: FC<ItineraryProps> = ({ origin, legs }) => (
  <div className={styles.destinationList}>
    <div className={styles.destination}>{origin}</div>
    {legs.map((leg, index) => (
      <React.Fragment key={leg.from}>
        <div
          className={styles.leg}
          style={{
            gridRow: index + 1,
          }}
        >
          {leg.distance.toFixed(2)} km
        </div>
        <div
          className={`${styles.destination} ${
            index === legs.length - 1 ? styles.finalDestination : ""
          }`}
        >
          {leg.to}
        </div>
      </React.Fragment>
    ))}
  </div>
);
