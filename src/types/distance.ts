export type Leg = {
  from: string;
  to: string;
  distance: number;
};

export interface DistanceResponseType {
  legs: Leg[];
  totalDistance: number;
}
