declare module 'maze-generation' {
  interface Options {
    width: number;
    height: number;
    seed?: number | string;
    algorithm?: 'DEPTHFIRST' | 'HUNTANDKILL';
  }

  interface Position {
    row: number;
    column: number;
  }

  interface Cell {
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    visited: boolean;
  }

  interface MazeSolution {
    toJSON(): Position[];

    toString(): string;
  }

  interface GeneratedMaze {
    generateSolution(start: Position, goal: Position): MazeSolution;

    toJSON(): { rows: Cell[][] };

    toString(): string;
  }

  export default function mazeGeneration(options: Options): GeneratedMaze;
}
