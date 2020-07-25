import { Router } from 'express';

import statusCheckRouter from './modules/statusCheck/statusCheck.routes';

const router = Router();

// status check
router.use(statusCheckRouter);

export default router;
