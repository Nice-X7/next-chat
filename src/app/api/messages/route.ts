import { NextRequest, NextResponse } from "next/server";
import { MessagesType } from "./messages.data";
import { messages } from "./messages.data";


export async function GET() {
    return NextResponse.json(messages)
}

const newId = messages.length > 0 ? Math.max(...messages.map(msg => msg.id)) + 1 : 1;
export async function POST(req:NextRequest) {
    const body = await req.json()
    const newMessage: MessagesType = {
        role: body.role,
        id: newId,
        userId: body.userId,
        message: body.message,
        dispatchTime: new Date().toLocaleTimeString()
    }
    return NextResponse.json(newMessage, { status: 201 })
}