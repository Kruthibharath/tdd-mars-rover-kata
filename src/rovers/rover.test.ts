import { createGrid } from "../plateaus/plateau";
import { MarsRover } from "../rovers/rover";
describe("create a grid with given width and height", () => {
  test("should return { x: 5, y: 5 } for createGrid(5, 5)", () => {
    const grid = createGrid(5, 5);
    expect(grid).toEqual({ x: 5, y: 5 });
  });
});
