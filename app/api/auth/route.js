import { NextResponse } from 'next/server';

export async function POST(request) {
  const { password } = await request.json();

  if (password === process.env.SITE_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('authorized', 'true', { httpOnly: true, path: '/' });
    return response;
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
