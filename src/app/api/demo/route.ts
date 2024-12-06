import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
    return NextResponse.json({ time: Date.now() }, {
        status: 200,
        headers: {
            'Cache-Control': 'max-age=240, stale-while-revalidate',
        }
    });
}
