import { MazeError } from './maze-error';

const directions = ['up', 'down', 'left', 'right'] as const;

function isDirection(direction: unknown): direction is Direction {
  return directions.indexOf(direction as Direction) != -1;
}

export function ensureDirection(direction: unknown): Direction {
  if (isDirection(direction)) {
    return direction;
  } else {
    throw MazeError.badRequest(`${direction} is not a valid direction, valid directions are ${directions}`);
  }
}

export type Direction = (typeof directions)[number];
