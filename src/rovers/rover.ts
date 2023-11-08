//import { createGrid } from "../plateaus/plateau";

type directions = "N" | "S" | "E" | "W";

export function turnLeft(direction: directions): directions {
  switch (direction) {
    case "N":
      return "W";
    case "W":
      return "S";
    case "S":
      return "E";
    case "E":
      return "N";
    default:
      return direction;
  }
}
export function turnRight(direction: directions): directions {
  switch (direction) {
    case "N":
      return "E";
    case "W":
      return "N";
    case "S":
      return "W";
    case "E":
      return "S";
    default:
      return direction;
  }
}
