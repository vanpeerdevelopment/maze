import { Maze } from './maze';
import mazeGeneration, { GeneratedMaze } from 'maze-generation';
import { mazeId } from './maze-id';
import { MazeCell } from './maze-cell';
import { directions } from './direction';
import { Position } from './position';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;
const DEFAULT_START: Position = new Position(0, 0);
const DEFAULT_GOAL: Position = new Position(DEFAULT_HEIGHT - 1, DEFAULT_WIDTH - 1);

export class MazeFactory {
  create(): Maze {
    const generatedMaze: GeneratedMaze = mazeGeneration({ width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT });
    const rows = generatedMaze.toJSON().rows;

    const mazeRows: MazeCell[] = [];
    for (let row = 0; row < rows.length; row++) {
      for (let column = 0; column < rows[row].length; column++) {
        mazeRows.push(
          new MazeCell(
            new Position(row, column),
            directions.filter((direction) => rows[row][column][direction]),
            row == DEFAULT_GOAL.row && column == DEFAULT_GOAL.column,
            row == DEFAULT_START.row && column == DEFAULT_START.column,
            false,
          ),
        );
      }
    }

    return new Maze(mazeId(), mazeRows);
  }
}
