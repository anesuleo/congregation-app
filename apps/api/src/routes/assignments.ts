import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/v1/assignments — all upcoming for congregation
router.get('/', async (req: AuthRequest, res) => {
  const assignments = await prisma.assignment.findMany({
    where: { congregation_id: req.congregationId, meeting_date: { gte: new Date() } },
    include: { publisher: true },
    orderBy: { meeting_date: 'asc' },
  });
  res.json(assignments);
});

// GET /api/v1/assignments/mine — publisher's own upcoming
router.get('/mine', async (req: AuthRequest, res) => {
  const assignments = await prisma.assignment.findMany({
    where: { congregation_id: req.congregationId, publisher_id: req.publisherId, meeting_date: { gte: new Date() } },
    orderBy: { meeting_date: 'asc' },
  });
  res.json(assignments);
});

export { router as assignmentsRouter };
