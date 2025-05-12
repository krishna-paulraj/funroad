import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Hello from GET route" });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "Hello from POST", data: body });
}
