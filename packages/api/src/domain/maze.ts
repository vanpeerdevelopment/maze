import { MazeId } from './maze-id';
import { Direction } from './direction';
import { MazeCell } from './maze-cell';
import { Position } from './position';
import { MazeFormatter } from './maze-formatter';
import { MazeError } from './maze-error';

export class Maze {
  constructor(
    private _id: MazeId,
    private _mazeCells: MazeCell[],
    private _goldDiggingAttemptsLeft: number,
    private _finished: boolean = false,
  ) {}

  getId(): MazeId {
    return this._id;
  }

  move(direction: Direction): void {
    this.validateNotFinished();
    const currentCell = this.getCurrentCell();
    const nextCell = this.getCell(currentCell.getNextPosition(direction));
    currentCell.markVisited();
    nextCell.markCurrent();
    console.log(`Position after move row: ${this.getCurrentCell().getPosition().toString()}`);
    if (this.getCurrentCell().isGoal()) {
      this._finished = true;
      console.log(`Reached goal`);
    }
  }

  getCurrentCell(): MazeCell {
    return this._mazeCells.find((cell) => cell.isCurrent())!;
  }

  getNumberOfGoldBuried(): number {
    return this._mazeCells.filter((cell) => cell.isGoldBuried()).length;
  }

  getNumberOfGoldFound(): number {
    return this._mazeCells.filter((cell) => cell.isGoldFound()).length;
  }

  getGoldDiggingAttemptsLeft(): number {
    return this._goldDiggingAttemptsLeft;
  }

  digGold() {
    this.validateNotFinished();
    if (this._goldDiggingAttemptsLeft <= 0) {
      throw MazeError.rateLimited('No gold digging attempts left');
    }
    this._goldDiggingAttemptsLeft--;
    this.getCurrentCell().digGold();
  }

  private validateNotFinished(): void {
    if (this._finished) {
      throw MazeError.badRequest('Already reached goal');
    }
  }

  isFinished() {
    return this._finished;
  }

  toString() {
    return new MazeFormatter(this._mazeCells).toString();
  }

  private getCell(position: Position): MazeCell {
    return this._mazeCells.find((cell) => cell.hasPosition(position))!;
  }
}
