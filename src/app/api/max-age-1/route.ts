import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
    console.log('FETCH demo max-age-1');
    return NextResponse.json({ time: Date.now() }, {
        status: 200,
        headers: {
            'Cache-Control': 'max-age=1',
        }
    });
}
