import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  // Clear the JWT cookie
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: false, // Keep false for localhost, set true in production
    path: "/",
    expires: new Date(0),
  });

  return response;
}
