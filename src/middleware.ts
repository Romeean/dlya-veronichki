import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid"

export default function Middleware(request: NextRequest){
  const response = NextResponse.next()
  
  if(request.cookies.get("unique-definer")) return response;

  const sessionId = uuidv4()
  const cookies = response.cookies.set("unique-definer", sessionId)

  
  return response;
}

export const config = {
  matcher: "/"
}