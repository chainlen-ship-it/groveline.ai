import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://grfneypykzwfefwvgiqs.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZm5leXB5a3p3ZmVmd3ZnaXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NTUyMDUsImV4cCI6MjA3NTUzMTIwNX0.kxPA2abp3eRXw40M_qGRtC8sA0h7dbiiXi9svyBRSBY';

export const supabase = createClient(supabaseUrl, supabaseKey);
