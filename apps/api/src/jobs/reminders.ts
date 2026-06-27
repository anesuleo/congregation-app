import cron from 'node-cron';
import { Expo } from 'expo-server-sdk';
import { PrismaClient } from '@prisma/client';

const expo = new Expo();
const prisma = new PrismaClient();

export function startReminderJobs() {
  // 8am daily — notify publishers with assignments in ~3 days
  cron.schedule('0 8 * * *', async () => {
    const threeDays = new Date(); threeDays.setDate(threeDays.getDate() + 3);
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 2);
    const upcoming = await prisma.assignment.findMany({
      where: { meeting_date: { gte: tomorrow, lte: threeDays } },
      include: { publisher: true },
    });
    const messages = upcoming
      .filter((a) => a.publisher.expo_push_token)
      .map((a) => ({
        to: a.publisher.expo_push_token!,
        title: 'Upcoming Assignment',
        body: `You have a ${a.part} on ${new Date(a.meeting_date).toDateString()}`,
        data: { assignmentId: a.id },
      }));
    if (messages.length > 0) {
      const chunks = expo.chunkPushNotifications(messages);
      for (const chunk of chunks) await expo.sendPushNotificationsAsync(chunk);
      console.log(`Sent ${len(messages)} reminder(s)`);
    }
  });
}
