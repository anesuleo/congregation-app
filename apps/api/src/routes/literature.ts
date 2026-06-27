import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement literature routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'literature endpoint — coming soon' });
});

export { router as literatureRouter };
