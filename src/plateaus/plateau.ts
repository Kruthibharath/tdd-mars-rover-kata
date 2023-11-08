type coordinates = {
  x: number;
  y: number;
};
type direction = "N" | "S" | "E" | "W";

export function createGrid(width: number, height: number): coordinates {
  return { x: width, y: height };
}
