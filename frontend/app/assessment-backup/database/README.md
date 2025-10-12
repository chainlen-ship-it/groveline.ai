# Assessment Database Setup

## Overview

The assessment funnel stores responses in two tables:
1. **`assessments`** - Main assessment record (one per completion)
2. **`assessment_answers`** - Individual question answers (normalized)

---

## Schema

### Table 1: `assessments`

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL PRIMARY KEY | Unique assessment ID |
| `name` | VARCHAR(255) | User's full name |
| `email` | VARCHAR(255) | User's email address |
| `started_at` | TIMESTAMP | When user started the assessment |
| `submitted_at` | TIMESTAMP | When user completed the assessment |
| `completed` | BOOLEAN | Whether assessment was finished |
| `overall_score` | INTEGER | 0-100 percentage score |
| `utm_source` | VARCHAR(100) | UTM tracking parameter |
| `utm_medium` | VARCHAR(100) | UTM tracking parameter |
| `utm_campaign` | VARCHAR(100) | UTM tracking parameter |
| `referrer` | TEXT | HTTP referrer |
| `created_at` | TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | Record update timestamp |

### Table 2: `assessment_answers`

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL PRIMARY KEY | Unique answer ID |
| `assessment_id` | INTEGER | Foreign key to `assessments.id` |
| `question_id` | VARCHAR(10) | Question identifier (e.g., 'q1', 'q2') |
| `question_number` | INTEGER | Question number (1-15) |
| `question_category` | VARCHAR(100) | Category (e.g., 'Fund Formation') |
| `answer_value` | TEXT | The actual answer (string or JSON) |
| `answer_score` | INTEGER | Score 1-5 (NULL for open-ended) |
| `created_at` | TIMESTAMP | Record creation timestamp |

---

## Installation

### Option 1: Run SQL Script

```bash
psql -U your_username -d your_database -f schema.sql
```

### Option 2: Manual Creation

Copy the SQL from `schema.sql` and run it in your database client.

---

## API Integration

The API route is at `/api/assessment/submit` and expects:

```typescript
{
  name: string;
  email: string;
  answers: Record<string, number>; // Q1-Q10 scored answers
  openResponses: Record<string, string>; // Q11-Q15 open-ended
  startedAt: string; // ISO timestamp
  submittedAt: string; // ISO timestamp
  overallScore: number; // 0-100
}
```

---

## Database Connection Options

### Option A: PostgreSQL with `pg`

```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// In your API route:
const client = await pool.connect();
```

### Option B: Prisma

1. Install Prisma:
```bash
npm install @prisma/client
npm install -D prisma
```

2. Initialize:
```bash
npx prisma init
```

3. Add to `schema.prisma`:
```prisma
model Assessment {
  id            Int      @id @default(autoincrement())
  name          String
  email         String
  startedAt     DateTime
  submittedAt   DateTime?
  completed     Boolean  @default(false)
  overallScore  Int?
  utmSource     String?
  utmMedium     String?
  utmCampaign   String?
  referrer      String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  answers       AssessmentAnswer[]
}

model AssessmentAnswer {
  id               Int      @id @default(autoincrement())
  assessmentId     Int
  questionId       String
  questionNumber   Int
  questionCategory String?
  answerValue      String
  answerScore      Int?
  createdAt        DateTime @default(now())
  assessment       Assessment @relation(fields: [assessmentId], references: [id], onDelete: Cascade)
}
```

4. Generate client:
```bash
npx prisma generate
```

### Option C: Supabase

1. Create tables in Supabase dashboard using `schema.sql`
2. Use Supabase client:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// In your API route:
const { data, error } = await supabase
  .from('assessments')
  .insert(assessmentData);
```

---

## Environment Variables

Add to `.env.local`:

```bash
# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/groveline"

# OR Supabase
NEXT_PUBLIC_SUPABASE_URL="your-project-url"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

---

## Queries

### Get all completed assessments
```sql
SELECT * FROM assessments WHERE completed = TRUE ORDER BY submitted_at DESC;
```

### Get assessment with answers
```sql
SELECT
  a.name,
  a.email,
  a.overall_score,
  aa.question_id,
  aa.answer_value,
  aa.answer_score
FROM assessments a
JOIN assessment_answers aa ON a.id = aa.assessment_id
WHERE a.id = 1;
```

### Get average scores by question
```sql
SELECT
  question_id,
  question_category,
  AVG(answer_score) as avg_score,
  COUNT(*) as response_count
FROM assessment_answers
WHERE answer_score IS NOT NULL
GROUP BY question_id, question_category
ORDER BY question_id;
```

### Find low-scoring assessments (need follow-up)
```sql
SELECT
  name,
  email,
  overall_score,
  submitted_at
FROM assessments
WHERE overall_score < 60 AND completed = TRUE
ORDER BY submitted_at DESC;
```

---

## Next Steps

1. **Run the schema SQL** to create tables
2. **Choose a database client** (pg, Prisma, or Supabase)
3. **Update `/app/api/assessment/submit/route.ts`** with your database code
4. **Test the submission** by completing an assessment

The API route already has commented examples for all three options!
