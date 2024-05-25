import express, { Request, Response, Router } from 'express';

export const mazePath: string = '/maze';
export const mazeRouter: Router = express.Router();

mazeRouter.get('/', (req: Request, res: Response) => {
  const value = { hello: 'world' };
  res.json(value);
});

mazeRouter.post('/', (req: Request, res: Response) => {
  res.json({ requestName: req.body.name });
});
