import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Ensure environment variables are properly set and accessible
  const supabase = createMiddlewareClient({
    req,
    res,
  });

  // Fetch session
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error fetching session:', error);
  }

  return res;
}
