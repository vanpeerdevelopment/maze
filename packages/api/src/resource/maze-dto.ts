import { Maze } from '../domain/maze';
import { MazeId } from '../domain/maze-id';

export class MazeDto {
  static from(maze: Maze): MazeDto {
    return new MazeDto(maze.getId(), maze.getCurrentCell().isGoldBuried());
  }

  constructor(
    public id: MazeId,
    public standingOnGold: boolean,
  ) {}
}
