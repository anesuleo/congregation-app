import { Router } from 'express';
import { AuthRequest } from '../middleware/auth';

const router = Router();

// TODO: implement announcements routes
router.get('/', async (req: AuthRequest, res) => {
  res.json({ message: 'announcements endpoint — coming soon' });
});

export { router as announcementsRouter };
