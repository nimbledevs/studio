

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Check if environment variables are defined
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables are required.');
    return res; // Or potentially redirect to an error page
  }

  const supabase = createMiddlewareClient({ req, res });
  try {
    await supabase.auth.getSession();
  } catch (error) {
    console.error('Failed to get session:', error);
    // Handle error appropriately, e.g., redirect to an error page
  }
  return res
}


