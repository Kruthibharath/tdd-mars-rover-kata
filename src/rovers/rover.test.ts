import { createGrid, isWithInGrid } from "../plateaus/plateau";
import { moveForward, turnLeft, turnRight } from "../rovers/rover";
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

describe("turnLeft", () => {
  test("rover should turn left correctly for the given coordinate", () => {
    expect(turnLeft("N")).toBe("W");
    expect(turnLeft("W")).toBe("S");
    expect(turnLeft("S")).toBe("E");
    expect(turnLeft("E")).toBe("N");
  });
});

describe("turnRight", () => {
  test("rover should turn right correctly for the given coordinate", () => {
    expect(turnRight("N")).toBe("E");
    expect(turnRight("W")).toBe("N");
    expect(turnRight("S")).toBe("W");
    expect(turnRight("E")).toBe("S");
  });
});

describe("moveForward", () => {
  test("rover should move in the right direction for the given coordinate", () => {
    const point = { x: 1, y: 2 };
    expect(moveForward(point, "E")).toEqual({ x: 2, y: 2 });
  });
  test("rover should move in the right direction for the given coordinate", () => {
    const point = { x: 3, y: 2 };
    expect(moveForward(point, "W")).toEqual({ x: 2, y: 2 });
  });
  test("rover should move in the right direction for the given coordinate", () => {
    const point = { x: 0, y: 0 };
    expect(moveForward(point, "N")).toEqual({ x: 0, y: 1 });
  });
});
