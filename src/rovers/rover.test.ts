import { createGrid, isWithInGrid } from "../plateaus/plateau";
import { moveRoverInstructions, roverPosition } from "../rovers/rover";
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
    const result1: roverPosition = moveRoverInstructions(
      plateauSize,
      initialPosition1,
      initialDirection1,
      instructions1
    );
    expect(result1).toEqual({ position: { x: 1, y: 3 }, direction: "N" });
  });
  test("should move the rover correctly with given instructions", () => {
    const plateauSize = { x: 5, y: 5 };
    const initialPosition2 = { x: 3, y: 3 };
    const initialDirection2 = "E";
    const instructions2 = "MMRMMRMRRM";
    const result2: roverPosition = moveRoverInstructions(
      plateauSize,
      initialPosition2,
      initialDirection2,
      instructions2
    );
    expect(result2).toEqual({ position: { x: 5, y: 1 }, direction: "E" });
  });
  test("should rover handle the invlaid set of given instructions", () => {
    const plateauSize = { x: 5, y: 5 };
    const initialPosition2 = { x: 1, y: 3 };
    const initialDirection2 = "E";
    const instructions2 = "ABCXYZ";
    const result3: roverPosition = moveRoverInstructions(
      plateauSize,
      initialPosition2,
      initialDirection2,
      instructions2
    );
    expect(result3).toEqual({ position: { x: 1, y: 3 }, direction: "E" });
  });
});
