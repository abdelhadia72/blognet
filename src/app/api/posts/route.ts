import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    const body = await request.json();
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
        },
    });
    return NextResponse.json(post);
}

export async function GET() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return NextResponse.json(posts);
}
