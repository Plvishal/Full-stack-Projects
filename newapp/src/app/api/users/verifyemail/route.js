import { connectMongo } from '@/config/db';
import User from '@/modules/userSchema';
import { NextRequest, NextResponse } from 'next/server';

connectMongo();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { token } = reqBody;
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json({ error: 'Invailid token' }, { status: 200 });
    }
    console.log(user);
    user.isVerfied = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();
    return NextResponse.json(
      { msg: 'Email verified successfully done' },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
