import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement notifications routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'notifications endpoint — coming soon' });
});

export { router as notificationsRouter };
