import { NextResponse } from "next/server";
import { users } from "./users.data";

export async function GET() {
    return NextResponse.json(users)
}