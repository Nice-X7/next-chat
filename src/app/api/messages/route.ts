import { NextRequest, NextResponse } from "next/server";
import { MessagesType } from "./messages.data";
import { messages } from "./messages.data";


export async function GET() {
    return NextResponse.json(messages)
}

export async function POST(req:NextRequest) {
    const body = await req.json()
    const newMessage: MessagesType = {
        role: body.role,
        id: messages.length + 1,
        userId: body.userId,
        message: body.message,
        dispatchTime: new Date().toISOString()
    }
    return NextResponse.json(newMessage, { status: 201 })
}