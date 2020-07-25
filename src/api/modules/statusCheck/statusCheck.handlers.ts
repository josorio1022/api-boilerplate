import { Request, Response } from 'express';
import { OK } from 'http-status-codes';

export const index = (_: Request, res: Response) => res.status(OK).json({ message: 'Hello world.' });
