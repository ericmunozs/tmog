import { Request, Response, NextFunction } from 'express'
import { HttpError } from '../../domain/errors/HttpError'

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err instanceof HttpError ? err.statusCode : 500

  res.status(statusCode).json({
    error: err.message || 'Internal Server Error'
  })
}
