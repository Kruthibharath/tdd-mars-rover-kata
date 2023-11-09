import { createGrid } from "../plateaus/plateau";

type coordinates = { x: number; y: number };

type directions = "N" | "S" | "E" | "W";

/* Input for the function: 
   plateauSize : 5 5
   roverPosition: 1 2 N (coordinates direction)
   instruction: LMLMLMLMM (string)
*/

export function moveRoverInstructions(
  plateauSize: coordinates,
  initialCoordinates: coordinates,
  initialDirection: directions,
  instructions: string //LMLMLMLMM
) {
  let roverCoordinates: coordinates = initialCoordinates; //1,2
  let roverDirection: directions = initialDirection; //N

  const turnLeft = () => {
    switch (roverDirection) {
      case "N":
        roverDirection = "W"; //w
        break;
      case "W":
        roverDirection = "S";
        break;
      case "S":
        roverDirection = "E";
        break;
      case "E":
        roverDirection = "N";
        break;
    }
  };
  const turnRight = () => {
    switch (roverDirection) {
      case "N":
        roverDirection = "E";
        break;
      case "W":
        roverDirection = "N";
        break;
      case "S":
        roverDirection = "W";
        break;
      case "E":
        roverDirection = "S";
        break;
    }
  };
  const moveForward = () => {
    switch (roverDirection) {
      case "N":
        roverCoordinates = { x: roverCoordinates.x, y: roverCoordinates.y + 1 };
        break;
      case "S":
        roverCoordinates = { x: roverCoordinates.x, y: roverCoordinates.y - 1 };
        break;
      case "E":
        roverCoordinates = { x: roverCoordinates.x + 1, y: roverCoordinates.y };
        break;
      case "W":
        roverCoordinates = { x: roverCoordinates.x - 1, y: roverCoordinates.y };
        break;
    }
  };
  for (const instruction of instructions) {
    switch (instruction) {
      case "L":
        turnLeft();
        break;
      case "R":
        turnRight();
        break;
      case "M":
        moveForward();
        break;
      default:
        break;
    }
  }
  //check rover isWithInGrid
  roverCoordinates.x = Math.max(0, Math.min(roverCoordinates.x, plateauSize.x));
  roverCoordinates.y = Math.max(0, Math.min(roverCoordinates.y, plateauSize.y));

  return roverCoordinates;
}
