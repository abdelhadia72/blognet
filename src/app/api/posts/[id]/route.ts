import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const post = await prisma.post.update({
        where: { id: params.id },
        data: {
            title: body.title,
            content: body.content,
        },
    });
    return NextResponse.json(post);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await prisma.post.delete({
        where: { id: params.id },
    });
    return NextResponse.json({ message: 'Post deleted' });
}