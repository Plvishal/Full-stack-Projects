import { connectMongo } from '@/config/db';
import User from '@/modules/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
connectMongo();
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ msg: 'user already exist' }, { status: 400 });
    }
    // bcryptjs salt generation
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(hashedPassword);
    return NextResponse.json({ hashedPassword });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
