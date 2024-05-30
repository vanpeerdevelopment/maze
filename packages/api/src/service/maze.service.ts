import { Maze } from '../domain/maze';
import { MazeRepository } from '../repository/maze.repository';
import { MazeId } from '../domain/maze-id';
import { Direction } from '../domain/direction';

class MazeService {
  constructor(private repository = new MazeRepository()) {}

  createMaze(): Maze {
    console.debug(`Creating new maze`);
    const maze = new Maze();
    this.repository.save(maze);
    console.debug(`Created maze with id ${maze.getId()}`);
    console.debug(maze.toString());
    console.debug(maze.toSolutionString());
    return maze;
  }

  find(id: MazeId): Maze {
    console.debug(`Searching maze with id ${id}`);
    const maze = this.repository.find(id);
    console.debug(`Found maze with id ${id}`);
    return maze;
  }

  move(id: MazeId, direction: Direction) {
    console.debug(`Moving in ${direction} in maze with id ${id}`);
    const maze = this.repository.find(id);
    maze.move(direction);
    console.debug(`Moved in ${direction} in maze with id ${id}`);
    return maze;
  }
}

export const mazeService = new MazeService();
