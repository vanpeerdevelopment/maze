import { Direction } from './direction';
import { Position } from './position';
import { MazeError } from './maze-error';

export class MazeCell {
  constructor(
    private readonly _position: Position,
    private readonly _walls: Direction[],
    private readonly _goal: boolean,
    private _current: boolean,
    private _visited: boolean,
    private _goldBuried: boolean,
    private _goldFound: boolean = false,
  ) {}

  getPosition(): Position {
    return this._position;
  }

  hasPosition(position: Position) {
    return this._position.equals(position);
  }

  getNextPosition(direction: Direction): Position {
    if (this.hasWall(direction)) {
      throw MazeError.badRequest(`Can not move ${direction} because there is a wall`);
    } else {
      return this._position.getNextPosition(direction);
    }
  }

  hasWall(direction: Direction): boolean {
    return this._walls.includes(direction);
  }

  isGoal(): boolean {
    return this._goal;
  }

  isCurrent(): boolean {
    return this._current;
  }

  isVisited(): boolean {
    return this._visited;
  }

  isGoldBuried(): boolean {
    return this._goldBuried;
  }

  isGoldFound(): boolean {
    return this._goldFound;
  }

  digGold() {
    if (!this._goldBuried) {
      throw MazeError.badRequest('No gold buried on current position');
    } else {
      this._goldFound = true;
    }
  }

  markCurrent() {
    this._current = true;
  }

  markVisited() {
    this._visited = true;
    this._current = false;
  }
}
