import React, { FC } from "react";
import { useDistanceCalculation, useUrlValues } from "./hooks";
import styles from "./ResultPage.module.css";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "./components/Skeleton";
import { Itinerary } from "./components/Itinerary";
import { ItineraryDetails } from "./components/ItineraryDetails";

export const ResultPage: FC = () => {
  const { origin, destinations, passengers, date } = useUrlValues();
  const { distance, error, loading } = useDistanceCalculation([
    origin,
    ...destinations,
  ]);
  const navigate = useNavigate();
  const hasData = !error && !loading && distance;

  return (
    <div className={styles.container}>
      {loading && <Skeleton />}
      {hasData && (
        <>
          <Itinerary legs={distance.legs ?? []} origin={origin} />
          <ItineraryDetails
            totalDistance={distance.totalDistance}
            passengers={passengers}
            date={date}
          />
        </>
      )}
      {error && <div className={styles.error}>{error}</div>}
      <Button
        className={styles.backButton}
        variant="primary"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
    </div>
  );
};
