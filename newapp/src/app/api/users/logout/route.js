import { connectMongo } from '@/config/db';
import User from '@/modules/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
connectMongo();
export async function GET(req) {
  try {
    const response = NextResponse.json({
      message: 'Logout successfully done',
      succes: true,
    });
    response.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.mesage }, { status: 500 });
  }
}
