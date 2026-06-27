export function getCurrentServiceYear(): number {
  const now = new Date();
  return now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();
}

export function formatMeetingDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}
