import { Request, Response, NextFunction } from 'express';

function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  res.status(400).json({ message: error.message });
}

export { errorHandler };
