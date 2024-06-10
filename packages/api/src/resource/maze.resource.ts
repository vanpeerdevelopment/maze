import express, { Request, Response, Router } from 'express';
import { mazeService } from '../service/maze.service';
import { MazeId } from '../domain/maze-id';
import { ensureDirection } from '../domain/direction';

export const mazePath: string = '/maze';
export const mazeRouter: Router = express.Router();

mazeRouter.post('', (_req: Request, res: Response) => {
  const maze = mazeService.createMaze();
  res.json(maze.toDto());
});

mazeRouter.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  mazeService.deleteMaze(id);
  res.status(204).send();
});

mazeRouter.get('', (_req: Request, res: Response) => {
  const mazes = mazeService.findAll();
  res.json({ mazes: mazes.map((maze) => maze.toDto()) });
});

mazeRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  const maze = mazeService.find(id);
  res.json(maze.toDto());
});

mazeRouter.put('/:id/move', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;
  const direction = ensureDirection(req.body.direction);

  const maze = mazeService.move(id, direction);
  res.json(maze.toDto());
});

mazeRouter.get('/:id/gold', (req: Request, res: Response) => {
  const id = req.params.id as MazeId;

  const maze = mazeService.digGold(id);
  res.json(maze.toDto());
});
