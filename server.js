// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import express from 'express';
// eslint-disable-next-line linebreak-style

const app = express();
app.use(express.static('public'));
app.use(express.json())
app.get('/', (_req, res) => {
  console.log('http://localhost:3000/ called');
  res.sendFile('index.html');
});
const port = 3000;
app.listen(port, () => console.log(`http://127.0.0.1:${port}/ app listening on port ${3000}`));
