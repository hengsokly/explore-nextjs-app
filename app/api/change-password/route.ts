// POST: /api/change-password

import { NextApiRequest, NextApiResponse } from "next";
import { hash, compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getToken } from "next-auth/jwt";
import { z } from "zod";

const schema = z.object({
  currentPassword: z.string().min(6),
  password: z.string().min(6)
})

export async function POST(request: NextRequest) {
  const token = await getToken({req: request})
  const body = await request.json()

  const userEmail = token ? token.email! : "";
  const { currentPassword, newPassword } = body;

  // 1. Validate request body (optional)
  const validation = schema.safeParse(body);
  if (!validation.success) 
    return NextResponse.json(validation.error.errors, {status: 400})
  
  // 2. Fetch user data from database
  const user = await fetchUserData(userEmail); // Replace with your logic

  if (!user) {
    return NextResponse.json({message: "Invalid credentials"}, {status: 401})
  }

  // 3. Compare current password with hashed password in database
  const isPasswordValid = await compare(currentPassword, user.hashedPassword!);

  if (!isPasswordValid) {
    return NextResponse.json({message: "Invalid current password"}, {status: 401})
  }

  // 4. Hash new password
  const hashedPassword = await hash(newPassword, 10);

  // 5. Update user password in database
  await updateUserPassword(user.id, hashedPassword); // Replace with your logic

  return NextResponse.json({message: "password change successfully"}, {status: 201})
} 

async function fetchUserData(userEmail: string) {
  const user = prisma.user.findUnique({
    where: {
      email: userEmail
    }
  })

  return user;
}

async function updateUserPassword(userId: string, hashedPassword: string) {
  const user = await prisma.user.update({
    where: {id: userId},
    data: { hashedPassword: hashedPassword }
  })
}
