import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const value = { hello: 'world' };
  res.json(value);
});

app.post('/', (req: Request, res: Response) => {
  res.json({ requestName: req.body.name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
