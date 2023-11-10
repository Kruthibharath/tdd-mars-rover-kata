export const DIRECTION = ["N", "S", "E", "W"] as const;
export type directions = (typeof DIRECTION)[number];
