import express, { Express } from 'express';
import { mazePath, mazeRouter } from './resource/maze.resource';
import { catchAll, errorHandler } from './resource/maze.error-handler';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(mazePath, mazeRouter);
app.use(catchAll);
app.use(errorHandler);
app.listen(port, () => console.log(`Maze started (port: ${port})`));
