import connectMongo from '@/config/db';
import User from '@/modules/userSchema';

import { NextRequest, NextResponse } from 'next/server';
connectMongo();
export async function POST(req) {
  const { username, email, password } = await req.json();
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json({ error: 'user already exits' }, { status: 400 });
  }
  const newUser = new User({
    username,
    email,
    password,
  });
  const savedUser = await newUser.save();
  console.log(savedUser);

  return NextResponse.json('Hello');
}
