import mazeGeneration, { Cell, GeneratedMaze, Position } from 'maze-generation';
import { MazeId, mazeId } from './maze-id';
import { Direction } from './direction';
import { MazeError } from './maze-error';

export class Maze {
  private cells: Cell[][];
  private currentPosition: Position;

  constructor(
    private _id: MazeId = mazeId(),
    private generatedMaze: GeneratedMaze = mazeGeneration({ width: 10, height: 10 }),
    private start: Position = { row: 0, column: 0 },
    private goal: Position = { row: 9, column: 9 },
  ) {
    this.cells = this.generatedMaze.toJSON().rows;
    this.currentPosition = this.start;
    this.visit(this.start);
    this.visit(this.goal);
  }

  getId(): MazeId {
    return this._id;
  }

  move(direction: Direction): void {
    if (this.getCurrentCell()[direction]) {
      throw MazeError.badRequest(`Can not move ${direction} because there is a wall`);
    } else {
      const nextPosition = this.getNextPosition(direction);
      this.visit(nextPosition);
      this.currentPosition = nextPosition;
      console.log(`Position after move row: ${this.currentPosition.row}, column: ${this.currentPosition.column}`);
    }
  }

  private visit(position: Position): void {
    this.getCell(position).visited = true;
  }

  private getCell(position: Position): Cell {
    return this.cells[position.row][position.column];
  }

  private getCurrentCell(): Cell {
    return this.getCell(this.currentPosition);
  }

  private getNextPosition(direction: Direction): Position {
    switch (direction) {
      case 'down':
        return {
          row: this.currentPosition.row + 1,
          column: this.currentPosition.column,
        };
      case 'up':
        return {
          row: this.currentPosition.row - 1,
          column: this.currentPosition.column,
        };
      case 'left':
        return {
          row: this.currentPosition.row,
          column: this.currentPosition.column - 1,
        };
      case 'right':
        return {
          row: this.currentPosition.row,
          column: this.currentPosition.column + 1,
        };
    }
  }

  toString() {
    return this.generatedMaze.toString();
  }

  toSolutionString() {
    return this.generatedMaze.generateSolution(this.start, this.goal).toString();
  }
}
