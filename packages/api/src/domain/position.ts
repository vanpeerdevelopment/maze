import { Direction } from './direction';

export class Position {
  constructor(
    private _row: number,
    private _column: number,
  ) {}

  get row() {
    return this._row;
  }

  get column() {
    return this._column;
  }

  getNextPosition(direction: Direction): Position {
    switch (direction) {
      case 'down':
        return new Position(this.row + 1, this.column);
      case 'up':
        return new Position(this.row - 1, this.column);
      case 'left':
        return new Position(this.row, this.column - 1);
      case 'right':
        return new Position(this.row, this.column + 1);
    }
  }

  equals(position: Position) {
    return this._row === position._row && this._column === position._column;
  }

  toString() {
    return `row: ${this._row}, column: ${this._column}`;
  }
}
