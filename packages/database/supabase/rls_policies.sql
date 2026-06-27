-- ─────────────────────────────────────────────────────────
-- Row Level Security Policies
-- Run in Supabase SQL editor after running prisma db push
-- ─────────────────────────────────────────────────────────

ALTER TABLE congregations         ENABLE ROW LEVEL SECURITY;
ALTER TABLE publishers            ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments           ENABLE ROW LEVEL SECURITY;
ALTER TABLE field_service_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE territories           ENABLE ROW LEVEL SECURITY;
ALTER TABLE duties                ENABLE ROW LEVEL SECURITY;
ALTER TABLE congregation_events   ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements         ENABLE ROW LEVEL SECURITY;
ALTER TABLE away_periods          ENABLE ROW LEVEL SECURITY;
ALTER TABLE literature_requests   ENABLE ROW LEVEL SECURITY;
ALTER TABLE delegates             ENABLE ROW LEVEL SECURITY;

-- All tables: isolate by congregation from JWT claim
CREATE POLICY "congregation_isolation" ON publishers
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON assignments
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON field_service_reports
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON territories
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON duties
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON congregation_events
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON announcements
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON away_periods
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON literature_requests
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

CREATE POLICY "congregation_isolation" ON delegates
  FOR ALL USING (congregation_id = (auth.jwt() ->> 'congregation_id')::uuid);

-- Publishers can only submit/edit their own report
CREATE POLICY "own_report_only" ON field_service_reports
  FOR UPDATE USING (publisher_id = (auth.jwt() ->> 'publisher_id')::uuid);
