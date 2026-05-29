import { NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabaseServer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  const supabase = createServerSupabase();
  const { error } = await supabase.from('inquiries').insert([{ name, email, phone, message }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
