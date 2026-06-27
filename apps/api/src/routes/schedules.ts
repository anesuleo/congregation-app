import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement schedules routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'schedules endpoint — coming soon' });
});

export { router as schedulesRouter };
