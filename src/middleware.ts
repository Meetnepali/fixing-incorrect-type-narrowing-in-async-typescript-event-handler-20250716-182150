import { Request, Response, NextFunction } from 'express';

type Profile = { id: string; username: string };
type Session = { token: string; expires: string };

// Middleware attempts to attach to req.profile and req.session
// Broken type propagation causes the compiler to not recognize these on the Request type.
export function attachProfileSession(req: Request, res: Response, next: NextFunction) {
  req.profile = { id: 'user-123', username: 'alice' } as any;
  req.session = { token: 's3cr3t', expires: '2050-01-01T00:00:00Z' } as any;
  next();
}
