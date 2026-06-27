import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement territories routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'territories endpoint — coming soon' });
});

export { router as territoriesRouter };
