import { Maze } from '../domain/maze';
import { MazeRepository } from '../repository/maze.repository';
import { MazeId } from '../domain/maze-id';
import { Direction } from '../domain/direction';
import { MazeFactory } from '../domain/maze.factory';

class MazeService {
  constructor(
    private factory = new MazeFactory(),
    private repository = new MazeRepository(),
  ) {}

  createMaze(): Maze {
    console.debug(`Creating new maze`);
    const maze = this.factory.create();
    this.repository.save(maze);
    console.debug(`Created maze with id ${maze.getId()}`);
    console.debug(maze.toString());
    return maze;
  }

  find(id: MazeId): Maze {
    console.debug(`Searching maze with id ${id}`);
    const maze = this.repository.find(id);
    console.debug(`Found maze with id ${id}`);
    console.debug(maze.toString());
    return maze;
  }

  move(id: MazeId, direction: Direction) {
    console.debug(`Moving in ${direction} in maze with id ${id}`);
    const maze = this.repository.find(id);
    maze.move(direction);
    console.debug(`Moved in ${direction} in maze with id ${id}`);
    console.debug(maze.toString());
    return maze;
  }
}

export const mazeService = new MazeService();
