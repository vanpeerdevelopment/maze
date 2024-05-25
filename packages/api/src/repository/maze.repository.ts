import { Maze } from '../domain/maze';
import { MazeId } from '../domain/maze-id';
import { MazeError } from '../domain/maze-error';

export class MazeRepository {
  constructor(private store: Record<MazeId, Maze> = {}) {}

  save(maze: Maze): void {
    this.store[maze.getId()] = maze;
  }

  find(id: MazeId): Maze {
    const maze = this.store[id];
    if (!!maze) {
      return maze;
    } else {
      throw MazeError.notFound(`Could not find maze with id ${id}`);
    }
  }
}
