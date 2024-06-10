import express, { Express, Request, Response } from 'express';
import { mazePath, mazeRouter } from './resource/maze.resource';
import { errorHandler } from './resource/maze.error-handler';

const app: Express = express();
const port = process.env.MAZE_PORT || 3000;

app.use(express.json());
app.use(express.static(`${__dirname}/ui/`));
app.use(mazePath, mazeRouter);
app.use('*', (_req: Request, res: Response) => res.sendFile(`${__dirname}/ui/index.html`));
app.use(errorHandler);
app.listen(port, () => console.log(`Maze started (port: ${port})`));
