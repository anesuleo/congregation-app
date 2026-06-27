import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { assignmentsRouter } from './routes/assignments';
import { reportsRouter } from './routes/reports';
import { schedulesRouter } from './routes/schedules';
import { territoriesRouter } from './routes/territories';
import { dutiesRouter } from './routes/duties';
import { eventsRouter } from './routes/events';
import { announcementsRouter } from './routes/announcements';
import { awayPeriodsRouter } from './routes/awayPeriods';
import { literatureRouter } from './routes/literature';
import { notificationsRouter } from './routes/notifications';
import { authMiddleware } from './middleware/auth';
import { startReminderJobs } from './jobs/reminders';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.use('/api/v1', authMiddleware);
app.use('/api/v1/assignments', assignmentsRouter);
app.use('/api/v1/reports', reportsRouter);
app.use('/api/v1/schedules', schedulesRouter);
app.use('/api/v1/territories', territoriesRouter);
app.use('/api/v1/duties', dutiesRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/announcements', announcementsRouter);
app.use('/api/v1/away-periods', awayPeriodsRouter);
app.use('/api/v1/literature', literatureRouter);
app.use('/api/v1/notifications', notificationsRouter);

startReminderJobs();

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
