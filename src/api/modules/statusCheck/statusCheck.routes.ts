import { Router } from 'express';

import * as handler from './statusCheck.handlers';

// portable router
const statusCheckRouter = Router();

// index
statusCheckRouter.get('/', handler.index);

export default statusCheckRouter;
