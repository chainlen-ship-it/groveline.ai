import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      answers,
      openResponses,
      startedAt,
      submittedAt,
      overallScore,
    } = body;

    // TODO: Replace with your actual database connection
    // Example using PostgreSQL with pg or Prisma:

    // 1. Insert assessment record
    const assessmentData = {
      name,
      email,
      started_at: startedAt,
      submitted_at: submittedAt,
      completed: true,
      overall_score: overallScore,
      // Add UTM params from request if needed
      utm_source: request.nextUrl.searchParams.get('utm_source'),
      utm_medium: request.nextUrl.searchParams.get('utm_medium'),
      utm_campaign: request.nextUrl.searchParams.get('utm_campaign'),
      referrer: request.headers.get('referer'),
    };

    console.log('[Assessment] Received submission:', {
      name,
      email,
      overallScore,
      answerCount: Object.keys(answers || {}).length,
      openResponseCount: Object.keys(openResponses || {}).length,
    });

    // 2. Insert assessment answers
    const answerRecords: Array<{
      question_id: string;
      question_number: number;
      answer_value: string;
      answer_score: number | null;
    }> = [];

    // Process scored answers (q1-q10)
    if (answers) {
      Object.entries(answers).forEach(([questionId, value]) => {
        answerRecords.push({
          question_id: questionId,
          question_number: parseInt(questionId.replace('q', '')),
          answer_value: String(value),
          answer_score: typeof value === 'number' ? value : null,
        });
      });
    }

    // Process open-ended responses (q11-q15)
    if (openResponses) {
      Object.entries(openResponses).forEach(([questionId, value]) => {
        answerRecords.push({
          question_id: questionId,
          question_number: parseInt(questionId.replace('q', '')),
          answer_value: String(value),
          answer_score: null,
        });
      });
    }

    // TODO: Replace with actual database insert
    // Example with Prisma:
    /*
    const assessment = await prisma.assessment.create({
      data: assessmentData,
    });

    await prisma.assessmentAnswer.createMany({
      data: answerRecords.map((record) => ({
        ...record,
        assessment_id: assessment.id,
      })),
    });
    */

    // Example with raw SQL (PostgreSQL):
    /*
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const assessmentResult = await client.query(
        `INSERT INTO assessments (name, email, started_at, submitted_at, completed, overall_score, utm_source, utm_medium, utm_campaign, referrer)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         RETURNING id`,
        [
          assessmentData.name,
          assessmentData.email,
          assessmentData.started_at,
          assessmentData.submitted_at,
          assessmentData.completed,
          assessmentData.overall_score,
          assessmentData.utm_source,
          assessmentData.utm_medium,
          assessmentData.utm_campaign,
          assessmentData.referrer,
        ]
      );

      const assessmentId = assessmentResult.rows[0].id;

      for (const answer of answerRecords) {
        await client.query(
          `INSERT INTO assessment_answers (assessment_id, question_id, question_number, answer_value, answer_score)
           VALUES ($1, $2, $3, $4, $5)`,
          [assessmentId, answer.question_id, answer.question_number, answer.answer_value, answer.answer_score]
        );
      }

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
    */

    // For now, just log the data (replace this with actual database insert)
    console.log('[Assessment] Would insert:', {
      assessment: assessmentData,
      answers: answerRecords,
    });

    // Optional: Send email notification or add to CRM
    // await sendEmailNotification(email, name);
    // await addToMailchimp(email, name);

    return NextResponse.json({
      success: true,
      message: 'Assessment submitted successfully',
    });
  } catch (error) {
    console.error('[Assessment] Error submitting:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit assessment',
      },
      { status: 500 }
    );
  }
}
