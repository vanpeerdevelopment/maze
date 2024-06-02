import { Maze } from '../domain/maze';
import { MazeId } from '../domain/maze-id';

export class MazeDto {
  static from(maze: Maze): MazeDto {
    return new MazeDto(
      maze.getId(),
      maze.getCurrentCell().isGoldBuried(),
      maze.getNumberOfGoldBuried(),
      maze.getNumberOfGoldFound(),
      maze.getGoldDiggingAttemptsLeft(),
      maze.isFinished(),
    );
  }

  constructor(
    public id: MazeId,
    public standingOnGold: boolean,
    public numberOfGoldBuried: number,
    public numberOfGoldFound: number,
    public goldDiggingAttemptsLeft: number,
    public finished: boolean,
  ) {}
}
