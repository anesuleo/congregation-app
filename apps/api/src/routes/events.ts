import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement events routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'events endpoint — coming soon' });
});

export { router as eventsRouter };
