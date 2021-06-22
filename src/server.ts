import express from 'express';
import 'reflect-metadata';

import { router } from './routes';

import './database';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || port, () => console.log(`Server is running at port ${port}`));
