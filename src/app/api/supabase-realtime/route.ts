
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient({ cookies: () => cookieStore })

  try {
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('*')
      .limit(1)
      .single()

    console.log('Subscription data:', subscription)

    return NextResponse.json({ subscription })
  } catch (error) {
    console.error('Error fetching subscription data:', error)
    return NextResponse.json({ error: 'Failed to fetch subscription data' })
  }
}
