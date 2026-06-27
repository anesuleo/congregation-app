import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement awayPeriods routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'awayPeriods endpoint — coming soon' });
});

export { router as awayPeriodsRouter };
