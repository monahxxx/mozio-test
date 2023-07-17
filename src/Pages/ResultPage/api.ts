import { cities } from "../../mocks/cities";
import { DistanceResponseType } from "../../types/distance";

const SEARCH_DELAY = 500;
const FAILED_QUERY = "dijon";

const calculateDistance = (from: string, to: string) => {
  const fromCoordinates = cities.find((x) => x[0] === from);
  const toCoordinates = cities.find((x) => x[0] === to);

  function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
    // distance between latitudes
    // and longitudes
    let dLat = ((lat2 - lat1) * Math.PI) / 180.0;
    let dLon = ((lon2 - lon1) * Math.PI) / 180.0;

    // convert to radiansa
    lat1 = (lat1 * Math.PI) / 180.0;
    lat2 = (lat2 * Math.PI) / 180.0;

    // apply formulae
    let a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    let rad = 6371;
    let c = 2 * Math.asin(Math.sqrt(a));
    return rad * c;
  }

  if (fromCoordinates && toCoordinates) {
    const [, fromLatitude, fromLongitude] = fromCoordinates;
    const [, toLatitude, toLongitude] = toCoordinates;

    return haversine(fromLatitude, fromLongitude, toLatitude, toLongitude);
  }
  return 0;
};

export const getDistance = (destinations: string[]) => {
  return new Promise<DistanceResponseType>((resolve, reject) => {
    setTimeout(() => {
      if (destinations.some((x) => x.toLocaleLowerCase() === FAILED_QUERY)) {
        reject("Oops! Something went wrong.");
      }
      const result: DistanceResponseType = {
        legs: [],
        totalDistance: 0,
      };
      for (let i = 1; i < destinations.length; i++) {
        const from = destinations[i - 1];
        const to = destinations[i];
        const distance = calculateDistance(from, to);
        result.legs.push({
          from,
          to,
          distance,
        });
        result.totalDistance += distance;
      }

      resolve(result);
    }, SEARCH_DELAY);
  });
};
