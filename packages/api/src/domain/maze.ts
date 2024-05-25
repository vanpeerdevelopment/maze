import { MazeId, mazeId } from './maze-id';

export class Maze {
  constructor(private _id: MazeId = mazeId()) {}

  getId(): MazeId {
    return this._id;
  }
}
