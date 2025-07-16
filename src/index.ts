import express from 'express';
import { attachProfileSession } from './middleware';
import { apiRouter } from './routes';

const app = express();
app.use(express.json());
app.use(attachProfileSession);
app.use('/api', apiRouter);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ error: err.message || 'Server error' });
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
