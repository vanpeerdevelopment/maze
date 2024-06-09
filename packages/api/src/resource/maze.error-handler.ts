import { NextFunction, Request, Response } from 'express';
import { MazeError } from '../domain/maze-error';

export function catchAll(_req: Request, res: Response, next: NextFunction) {
  throw MazeError.notFound(`The combination of HTTP verb and API endpoint you're using does not exist.`);
}

export function errorHandler(error: Error, _req: Request, res: Response, next: NextFunction) {
  console.error(error);
  const mazeError: MazeError = error instanceof MazeError ? error : MazeError.internalServerError();
  res.status(mazeError.errorStatus).json({ errorId: mazeError.errorId, errorMessage: mazeError.errorMessage });
}
