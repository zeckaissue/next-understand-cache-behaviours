import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
    console.log('FETCH demo no cache-control');
    return NextResponse.json({ time: Date.now() }, {
        status: 200,
    });
}
