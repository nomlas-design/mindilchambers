import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(request) {
  console.log('All env variables:', process.env);

  const { password } = await request.json();

  const sitePassword =
    process.env.SITE_PASSWORD ||
    require('dotenv').config().parsed.SITE_PASSWORD;

  if (password === sitePassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('authorized', 'true', { httpOnly: true, path: '/' });
    return response;
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
