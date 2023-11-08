import { createGrid, isWithInGrid } from "../plateaus/plateau";
import { MarsRover } from "../rovers/rover";
describe("create a grid with given width and height", () => {
  test("should return { x: 5, y: 5 } for createGrid(5, 5)", () => {
    const grid = createGrid(5, 5);
    expect(grid).toEqual({ x: 5, y: 5 });
  });
});
describe("isWithInGrid", () => {
  test("check for rover tobe with in the plateau bounds", () => {
    const grid = createGrid(5, 5);
    expect(isWithInGrid(grid, { x: 3, y: 2 })).toBe(true);
  });
  test("check for rover reaching out of the plateau bounds with width", () => {
    const grid = createGrid(5, 5);
    expect(isWithInGrid(grid, { x: 6, y: 2 })).toBe(false);
  });
  test("check for rover reaching out of the plateau bounds with height", () => {
    const grid = createGrid(5, 5);
    expect(isWithInGrid(grid, { x: 2, y: 7 })).toBe(false);
  });
  test("check for rover reaching out of the plateau bounds with height", () => {
    const grid = createGrid(5, 5);
    expect(isWithInGrid(grid, { x: 8, y: 7 })).toBe(false);
  });
});
