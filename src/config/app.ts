import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import responseTime from 'response-time';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { requestLogger } from '../lib/logger';
import apiRouter from '../api';

const app = express();

// enable cors
app.use(cors());
app.options('*', cors());
// extra security headers
app.use(helmet());
// parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// total response time
app.use(responseTime());
// general request logger
app.use(requestLogger);
// compress middleware
app.use(compression());
// parsing incoming cookies
app.use(cookieParser());
// load router
app.use('/api', apiRouter);

export default app;
