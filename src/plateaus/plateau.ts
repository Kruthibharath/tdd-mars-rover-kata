export type coordinates = {
  x: number;
  y: number;
};

export function createGrid(width: number, height: number): coordinates {
  return { x: width, y: height };
}

export function isWithInGrid(grid: coordinates, point: coordinates): boolean {
  return point.x >= 0 && point.x <= grid.x && point.y >= 0 && point.y <= grid.y;
}
