import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  congregationId?: string;
  publisherId?: string;
  role?: string;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Unauthorised' });
  try {
    const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET!) as any;
    req.congregationId = decoded.congregation_id;
    req.publisherId = decoded.publisher_id;
    req.role = decoded.role;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
