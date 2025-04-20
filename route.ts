// app/api/transactions/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Transaction from '@/models/Transaction';

export async function GET() {
  try {
    await connectDB();
    const transactions = await Transaction.find().sort({ date: -1 });
    return NextResponse.json(transactions);
  } catch (error) {
    console.error('GET /api/transactions failed:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const newTransaction = await Transaction.create(data);
    return NextResponse.json(newTransaction);
  } catch (error) {
    console.error('POST /api/transactions failed:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
