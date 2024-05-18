import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/config';
import routes from './routes';

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/', routes);

export default app;
