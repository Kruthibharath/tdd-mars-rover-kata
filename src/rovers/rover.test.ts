import { createGrid, isWithInGrid } from "../plateaus/plateau";
import { moveRoverInstructions, roverPosition } from "../rovers/rover";
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

/*
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
});*/
