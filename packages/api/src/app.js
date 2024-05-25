import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const value = { hello: 'world' };
  res.json(value);
});

app.post('/', (req, res) => {
  res.json({ requestName: req.body.name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});