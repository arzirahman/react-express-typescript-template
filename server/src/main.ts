import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import fs from 'fs';
import appRouter from './app';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.APP_PORT ?? 4000;
const clientPath = path.resolve(__dirname, '../client');

app.use('/api', appRouter);

if (fs.existsSync(clientPath)) {
  app.use(express.static(clientPath));
  app.get('*', (_, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Local Server http://localhost:${PORT}`);
});
