import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const ReportSchema = z.object({
  month: z.number().min(1).max(12),
  year: z.number().min(2024),
  hours: z.number().optional(),
  placements: z.number().optional(),
  videos: z.number().optional(),
  return_visits: z.number().optional(),
  bible_studies: z.number().optional(),
});

router.post('/', async (req: AuthRequest, res) => {
  const parsed = ReportSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error });
  const report = await prisma.fieldServiceReport.upsert({
    where: { publisher_id_month_year: { publisher_id: req.publisherId!, month: parsed.data.month, year: parsed.data.year } },
    update: parsed.data,
    create: { ...parsed.data, congregation_id: req.congregationId!, publisher_id: req.publisherId! },
  });
  res.json(report);
});

router.get('/history', async (req: AuthRequest, res) => {
  const reports = await prisma.fieldServiceReport.findMany({
    where: { publisher_id: req.publisherId },
    orderBy: [{ year: 'desc' }, { month: 'desc' }],
  });
  res.json(reports);
});

export { router as reportsRouter };
