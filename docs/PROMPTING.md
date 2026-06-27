# Claude Code Prompting Guide

Tips for prompting Claude Code effectively in this monorepo.

## Always specify the workspace

Bad:  "Add a screen for field service reports"
Good: "In apps/mobile/src/screens, create a FieldServiceReportScreen.tsx that..."

## Reference shared types

"Use the FieldServiceReport type from @congregation-app/shared and build a..."

## Congregation scoping reminder

Every DB query must include congregation_id. Remind Claude:
"Remember all Prisma queries must filter by req.congregationId for multi-tenancy"

## Useful prompt patterns

### New API route
"Add a GET /api/v1/territories/:id route to apps/api/src/routes/territories.ts
that fetches a single territory by id, scoped to req.congregationId"

### New mobile screen
"Create a DutiesScreen in apps/mobile/src/screens that fetches from
GET /api/v1/duties and displays upcoming duties in a list grouped by date"

### Database change
"Add a field group_number to the Publisher model in packages/database/prisma/schema.prisma,
run prisma generate, and update the Publisher type in packages/shared/src/types"
