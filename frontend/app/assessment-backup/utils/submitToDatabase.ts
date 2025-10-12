// Client-side database submission utility
// This bypasses Next.js API routes since we're using static export

export async function submitAssessmentToDatabase(data: {
  name: string;
  email: string;
  answers: Record<string, number>;
  openResponses: Record<string, string>;
  overallScore: number;
}) {
  // Option 1: Direct database connection via PostgREST or Supabase
  // Option 2: Send to a webhook/serverless function
  // Option 3: Use a form service like Formspree or Basin

  const payload = {
    name: data.name,
    email: data.email,
    overall_score: data.overallScore,
    started_at: new Date().toISOString(),
    submitted_at: new Date().toISOString(),
    completed: true,
    answers: data.answers,
    open_responses: data.openResponses,
  };

  console.log('[Assessment] Payload to submit:', payload);

  // TODO: Replace with your endpoint
  // For now, we'll use a webhook or direct DB call

  // Example with a webhook:
  /*
  const response = await fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
  */

  // Example with Supabase (client-side):
  /*
  import { createClient } from '@supabase/supabase-js';

  const supabase = createClient(
    'YOUR_SUPABASE_URL',
    'YOUR_SUPABASE_ANON_KEY'
  );

  const { data: assessment, error } = await supabase
    .from('assessments')
    .insert({
      name: payload.name,
      email: payload.email,
      overall_score: payload.overall_score,
      started_at: payload.started_at,
      submitted_at: payload.submitted_at,
      completed: payload.completed,
    })
    .select()
    .single();

  if (error) throw error;

  // Insert answers
  const answerRecords = [];
  Object.entries(payload.answers).forEach(([key, value]) => {
    answerRecords.push({
      assessment_id: assessment.id,
      question_id: key,
      question_number: parseInt(key.replace('q', '')),
      answer_value: String(value),
      answer_score: value,
    });
  });

  Object.entries(payload.open_responses).forEach(([key, value]) => {
    answerRecords.push({
      assessment_id: assessment.id,
      question_id: key,
      question_number: parseInt(key.replace('q', '')),
      answer_value: value,
      answer_score: null,
    });
  });

  await supabase.from('assessment_answers').insert(answerRecords);
  */

  return payload;
}
