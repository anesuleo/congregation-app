import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement duties routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'duties endpoint — coming soon' });
});

export { router as dutiesRouter };
