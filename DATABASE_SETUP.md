# EARTH-ED AI - Database Setup Guide

## Current Status

### ✅ Completed
1. **Dependencies Installed**:
   - @prisma/client
   - Prisma CLI
   - Express
   - Multer (file uploads)
   - bcryptjs (password hashing)
   - cors
   - dotenv

2. **Database Schema Created** (`prisma/schema.prisma`):
   - User model with authentication
   - EcoMission model with categories and difficulty
   - MissionSubmission with verification workflow
   - QuizQuestion, QuizAttempt, QuizAnswer models
   - UserProgress tracking
   - Achievement system
   - UserAchievement tracking

3. **Seed Script Created** (`prisma/seed.ts`):
   - 10 detailed eco-missions
   - 20 environmental quiz questions
   - 8 achievements
   - Ready to populate database

4. **Environment Configuration** (`.env.example`):
   - DATABASE_URL for PostgreSQL
   - Server configuration
   - File upload settings

## Next Steps to Complete

### Step 1: Set Up PostgreSQL Database

#### Option A: Local PostgreSQL Installation
```bash
# Install PostgreSQL for Windows
# Download from: https://www.postgresql.org/download/windows/

# After installation, create database:
psql -U postgres
CREATE DATABASE earthed_db;
\q
```

#### Option B: Docker (If Available)
```bash
docker run --name earthed-postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=earthed_db \
  -p 5432:5432 \
  -d postgres:15
```

#### Option C: Cloud Database (Railway, Neon, Supabase)
- Get connection string from provider
- Update DATABASE_URL in .env

### Step 2: Configure Environment Variables

Create `.env` file:
```env
# Copy from .env.example and update:
DATABASE_URL=postgresql://postgres:password@localhost:5432/earthed_db
GEMINI_API_KEY=your_actual_gemini_key
SESSION_SECRET=generate_random_string_here
PORT=3000
NODE_ENV=development
```

### Step 3: Run Database Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init

# Seed the database
npx prisma db seed
```

### Step 4: Create Backend API Server

Need to create `server/api.ts` with:
- Express server setup
- Database connection
- Authentication endpoints
- Mission CRUD endpoints
- Submission/verification endpoints
- Quiz endpoints
- Dashboard stats endpoints

### Step 5: Update Vite Config

Extend `vite.config.ts` to proxy API requests to Express server.

### Step 6: Implement Frontend Components

#### Required Updates:
1. **EcoTasks Component**:
   - Fetch missions from database
   - Submit evidence with file upload
   - Show submission status

2. **Quiz Component**:
   - Question-first UI (hide options until clicked)
   - Fetch questions from database
   - Save attempts to database

3. **Dashboard Component**:
   - Fetch user progress from database
   - Display verified vs pending missions
   - Show achievements

4. **Admin Interface**:
   - Review pending submissions
   - Approve/reject with feedback

### Step 7: Evidence Upload System

Create upload handling:
- Multer configuration
- File validation (type, size)
- Secure storage
- Access control

## Database Schema Overview

### Users
- Authentication with bcrypt
- Roles: STUDENT, ADMIN
- Relationships to all user-generated content

### Eco-Missions
- 10 pre-seeded missions
- Categories: WASTE_MANAGEMENT, WATER_CONSERVATION, ENERGY_SAVING, etc.
- Difficulty levels: EASY, MEDIUM, HARD
- Environmental impact estimates

### Mission Submissions
- Linked to users and missions
- Status: PENDING, VERIFIED, REJECTED
- Evidence storage
- Reviewer feedback

### Quiz System
- 20 pre-seeded questions
- Tracks all attempts
- Calculates scores
- Supports guest attempts (userId nullable)

### Progress Tracking
- Total points
- Verified missions count
- Environmental impact totals
- Real-time updates

### Achievements
- 8 pre-defined achievements
- Auto-unlock based on criteria
- Track earning timestamps

## Security Considerations

✅ **Implemented**:
- Password hashing with bcrypt
- Server-side session secrets
- Prepared statements (Prisma ORM)
- File upload validation setup

⚠️ **TODO**:
- JWT/session middleware
- Rate limiting
- CORS configuration
- Input validation middleware
- File upload sanitization

## Testing Checklist

Once database is set up:

- [ ] Can create user account
- [ ] Can login/logout
- [ ] Can fetch missions
- [ ] Can submit mission with evidence
- [ ] Admin can review submissions
- [ ] Can take quiz
- [ ] Quiz results save correctly
- [ ] Dashboard shows accurate stats
- [ ] Achievements unlock correctly
- [ ] Guest mode still works

## Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists
- Check firewall settings

### Migration Errors
- Drop database and recreate if needed
- Check Prisma schema syntax
- Ensure PostgreSQL version compatibility

### Seed Errors
- Check database is empty before seeding
- Verify all required fields have values
- Check enum values match schema

## Commands Reference

```bash
# Prisma Commands
npx prisma generate          # Generate client
npx prisma migrate dev       # Create migration
npx prisma migrate deploy    # Deploy to production
npx prisma db seed          # Run seed script
npx prisma studio           # Open database GUI
npx prisma db push          # Sync schema (dev only)

# Project Commands
npm run dev                 # Start development server
npm run build              # Production build
npm install                # Install dependencies
```

## Next Priority Tasks

1. ✅ Database schema - **DONE**
2. ✅ Seed script - **DONE**
3. ⏳ Set up local PostgreSQL
4. ⏳ Run migrations
5. ⏳ Create Express API server
6. ⏳ Implement authentication
7. ⏳ Update frontend to use database
8. ⏳ Implement file upload
9. ⏳ Create admin interface
10. ⏳ Test complete workflow

## Files Created

1. `prisma/schema.prisma` - Database schema
2. `prisma/seed.ts` - Seed data
3. `.env.example` - Environment template
4. `DATABASE_SETUP.md` - This file

## Contact & Support

For issues:
1. Check Prisma docs: https://www.prisma.io/docs
2. PostgreSQL docs: https://www.postgresql.org/docs/
3. Review error messages carefully
4. Check DATABASE_URL format

---

**Status**: Database architecture complete, ready for PostgreSQL setup and API implementation.
