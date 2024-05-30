import express, { Request, Response, Router } from 'express';
import { mazeService } from '../service/maze.service';
import { MazeId } from '../domain/maze-id';
import { ensureDirection } from '../domain/direction';

export const mazePath: string = '/maze';
export const mazeRouter: Router = express.Router();

mazeRouter.post('', (_req: Request, res: Response) => {
  const maze = mazeService.createMaze();
  res.json({ id: maze.getId() });
});

mazeRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  const maze = mazeService.find(id);
  res.json({ id: maze.getId() });
});

mazeRouter.put('/:id/move', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  const direction = ensureDirection(req.body.direction);

  const maze = mazeService.move(id, direction);
  res.json({ id: maze.getId() });
});
