import express from 'express';

const app = express();
const PORT = 15000;

app.get('/', (_req, res) => {
  res.send('test');
});

app.listen(PORT, () => {
  console.info(`app listen ${PORT} ...`);
})
