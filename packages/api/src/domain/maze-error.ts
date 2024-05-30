import { v4 as uuid } from 'uuid';

export type ErrorId = string;
export type ErrorStatus = number;

export class MazeError extends Error {
  static notFound(message: string = 'Not found'): MazeError {
    return new MazeError(404, message);
  }

  static badRequest(message: string = 'Bad request'): MazeError {
    return new MazeError(400, message);
  }

  static internalServerError(message: string = 'Internal server error'): MazeError {
    return new MazeError(500, message);
  }

  private constructor(
    public errorStatus: ErrorStatus,
    public errorMessage: string,
    public errorId: ErrorId = uuid(),
  ) {
    super();
  }
}
