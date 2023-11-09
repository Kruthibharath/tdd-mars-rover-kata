import { createGrid, isWithInGrid } from "../plateaus/plateau";
import { moveRoverInstructions } from "../rovers/rover";
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

describe("moveRoverInstructions", () => {
  test("should move the rover correctly with given instructions", () => {
    const plateauSize = { x: 5, y: 5 };
    const initialPosition1 = { x: 1, y: 2 };
    const initialDirection1 = "N";
    const instructions1 = "LMLMLMLMM";
    expect(
      moveRoverInstructions(
        plateauSize,
        initialPosition1,
        initialDirection1,
        instructions1
      )
    ).toEqual({ x: 1, y: 3 });
  });
  test("should move the rover correctly with given instructions", () => {
    const plateauSize = { x: 5, y: 5 };
    const initialPosition2 = { x: 3, y: 3 };
    const initialDirection2 = "E";
    const instructions2 = "MMRMMRMRRM";
    expect(
      moveRoverInstructions(
        plateauSize,
        initialPosition2,
        initialDirection2,
        instructions2
      )
    ).toEqual({ x: 5, y: 1 });
  });
  test("should rover handle the invlaid set of given instructions", () => {
    const plateauSize = { x: 5, y: 5 };
    const initialPosition2 = { x: 1, y: 3 };
    const initialDirection2 = "E";
    const instructions2 = "ABCXYZ";
    expect(
      moveRoverInstructions(
        plateauSize,
        initialPosition2,
        initialDirection2,
        instructions2
      )
    ).toEqual({ x: 1, y: 3 });
  });
});
