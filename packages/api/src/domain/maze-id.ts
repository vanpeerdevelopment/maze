import { v4 as uuid } from 'uuid';

export type MazeId = string;

export function mazeId(): MazeId {
  return uuid();
}
