import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getDistance } from "./api";
import { DistanceResponseType } from "../../types/distance";

export const useUrlValues = () => {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date") ?? null;

  return {
    origin: searchParams.get("origin") ?? "",
    destinations: searchParams.get("destinations")?.split(",") ?? [],
    passengers: searchParams.get("passengers"),
    date,
  };
};

export const useDistanceCalculation = (destinations?: string[]) => {
  const [distance, setDistance] = useState<DistanceResponseType>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!destinations) return;
    setLoading(true);
    setError(false);
    getDistance(destinations)
      .then((response) => {
        setDistance(response);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return {
    distance,
    error,
    loading,
  };
};
