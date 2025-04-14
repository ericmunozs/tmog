import { HttpError } from './HttpError'

export class ValidationError extends HttpError {
  constructor(message: string) {
    super(message, 400)
  }
}
