# Congregation App — Developer Setup

## Prerequisites
- Node.js >= 18
- Yarn >= 1.22
- Expo CLI: `npm install -g expo-cli eas-cli`
- Supabase account (free tier)
- Railway account (Hobby $5/mo)

## 1. Clone and install

```bash
git clone https://github.com/YOUR_ORG/congregation-app.git
cd congregation-app
yarn install
```

## 2. Set up Supabase

1. Create a new Supabase project at supabase.com
2. Go to **SQL Editor** and run `packages/database/supabase/rls_policies.sql`
3. Copy your project URL and anon key from **Settings → API**

## 3. Set up environment files

```bash
# Mobile
cp apps/mobile/.env.example apps/mobile/.env
# Fill in EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY

# API
cp apps/api/.env.example apps/api/.env
# Fill in DATABASE_URL and SUPABASE_JWT_SECRET

# Admin
cp apps/admin/.env.example apps/admin/.env
```

## 4. Push the database schema

```bash
cd packages/database
yarn db:push
```

## 5. Run locally

```bash
# Mobile (in one terminal)
yarn mobile

# API (in another terminal)
yarn api

# Admin dashboard (in another terminal)
yarn admin
```

## Branch strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to Railway |
| `develop` | Integration branch — merge PRs here first |
| `feature/*` | Your feature branches |

## Two-developer workflow

- Developer 1 owns: `apps/mobile` + `packages/shared`
- Developer 2 owns: `apps/api` + `packages/database` + `apps/admin`
- Both review each other's PRs before merging to `develop`
