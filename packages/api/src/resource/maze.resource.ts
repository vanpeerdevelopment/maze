import express, { Request, Response, Router } from 'express';
import { mazeService } from '../service/maze.service';
import { MazeId } from '../domain/maze-id';
import { ensureDirection } from '../domain/direction';
import { MazeDto } from './maze-dto';

export const mazePath: string = '/maze';
export const mazeRouter: Router = express.Router();

mazeRouter.post('', (_req: Request, res: Response) => {
  const maze = mazeService.createMaze();
  res.json(MazeDto.from(maze));
});

mazeRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  const maze = mazeService.find(id);
  res.json(MazeDto.from(maze));
});

mazeRouter.put('/:id/move', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  const direction = ensureDirection(req.body.direction);

  const maze = mazeService.move(id, direction);
  res.json(MazeDto.from(maze));
});
