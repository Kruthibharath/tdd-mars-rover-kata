//import { createGrid } from "../plateaus/plateau";

type coordinates = { x: number; y: number };

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
export function moveForward(
  point: coordinates,
  direction: directions
): coordinates {
  switch (direction) {
    case "N":
      return { x: point.x, y: point.y + 1 };
    case "S":
      return { x: point.x, y: point.y - 1 };
    case "E":
      return { x: point.x + 1, y: point.y };
    case "W":
      return { x: point.x - 1, y: point.y };
    default:
      return point;
  }
}
