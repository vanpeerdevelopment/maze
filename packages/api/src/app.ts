import express, { Express } from 'express';
import { mazePath, mazeRouter } from './maze.resource';

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(mazePath, mazeRouter);
app.listen(port, () => console.log(`Maze app started (port: ${port})`));
