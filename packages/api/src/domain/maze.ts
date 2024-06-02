import { MazeId } from './maze-id';
import { Direction } from './direction';
import { MazeCell } from './maze-cell';
import { Position } from './position';
import { MazeFormatter } from './maze-formatter';

export class Maze {
  constructor(
    private _id: MazeId,
    private _mazeCells: MazeCell[],
  ) {}

  getId(): MazeId {
    return this._id;
  }

  move(direction: Direction): void {
    const currentCell = this.getCurrentCell();
    const nextCell = this.getCell(currentCell.getNextPosition(direction));
    currentCell.markVisited();
    nextCell.markCurrent();
    console.log(`Position after move row: ${this.getCurrentCell().getPosition().toString()}`);
  }

  getCurrentCell(): MazeCell {
    return this._mazeCells.find((cell) => cell.isCurrent())!;
  }

  private getCell(position: Position): MazeCell {
    return this._mazeCells.find((cell) => cell.hasPosition(position))!;
  }

  toString() {
    return new MazeFormatter(this._mazeCells).toString();
  }
}
