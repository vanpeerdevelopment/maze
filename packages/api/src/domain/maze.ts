import mazeGeneration from 'maze-generation';
import { MazeId, mazeId } from './maze-id';

export class Maze {
  constructor(
    private _id: MazeId = mazeId(),
    private generatedMaze = mazeGeneration({ width: 10, height: 10 }),
  ) {}

  getId(): MazeId {
    return this._id;
  }

  toString() {
    return this.generatedMaze.toString();
  }

  toSolutionString() {
    const start = { row: 0, column: 0 };
    const goal = { row: 9, column: 9 };
    return this.generatedMaze.generateSolution(start, goal).toString();
  }
}
