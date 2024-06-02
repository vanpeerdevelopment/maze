import { Maze } from './maze';
import mazeGeneration, { GeneratedMaze } from 'maze-generation';
import { mazeId } from './maze-id';
import { MazeCell } from './maze-cell';
import { directions } from './direction';
import { Position } from './position';

const WIDTH = 10;
const HEIGHT = 10;
const START: Position = new Position(0, 0);
const GOAL: Position = new Position(HEIGHT - 1, WIDTH - 1);

export class MazeFactory {
  create(): Maze {
    const generatedMaze: GeneratedMaze = mazeGeneration({ width: WIDTH, height: HEIGHT });
    const rows = generatedMaze.toJSON().rows;
    const goldBuriedPositions = this.getGoldBuryPositions(generatedMaze);

    const mazeRows: MazeCell[] = [];
    for (let row = 0; row < rows.length; row++) {
      for (let column = 0; column < rows[row].length; column++) {
        const position = new Position(row, column);
        mazeRows.push(
          new MazeCell(
            position,
            directions.filter((direction) => rows[row][column][direction]),
            GOAL.equals(position),
            START.equals(position),
            false,
            goldBuriedPositions.some((goldPosition) => position.equals(goldPosition)),
          ),
        );
      }
    }

    return new Maze(mazeId(), mazeRows, goldBuriedPositions.length + 2);
  }

  private getGoldBuryPositions(generatedMaze: GeneratedMaze): Position[] {
    const numberGoldBuried = Math.min(5, Math.min(WIDTH / 2, HEIGHT / 2));
    const possibleGoldBuryPositions = this.getPossibleGoldBuryPositions(generatedMaze);

    const result: Position[] = [];
    for (let i = 0; i < numberGoldBuried; i++) {
      const randomIndex = Math.floor(Math.random() * possibleGoldBuryPositions.length);
      result.push(possibleGoldBuryPositions[randomIndex]);
      possibleGoldBuryPositions.splice(randomIndex, 1);
    }
    return result;
  }

  private getPossibleGoldBuryPositions(generatedMaze: GeneratedMaze): Position[] {
    const result: Position[] = generatedMaze
      .generateSolution({ row: START.row, column: START.column }, { row: GOAL.row, column: GOAL.column })
      .toJSON()
      .map((position) => new Position(position.row, position.column));
    result.shift();
    result.pop();
    return result;
  }
}
