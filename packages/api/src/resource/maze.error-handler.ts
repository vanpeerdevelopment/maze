import { NextFunction, Request, Response } from 'express';
import { MazeError } from '../domain/maze-error';

export function errorHandler(error: Error, _req: Request, res: Response, next: NextFunction) {
  console.error(error);
  const mazeError: MazeError = error instanceof MazeError ? error : MazeError.internalServerError();
  res.status(mazeError.errorStatus).json({ errorId: mazeError.errorId, errorMessage: mazeError.errorMessage });
}
