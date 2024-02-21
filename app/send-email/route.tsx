import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: 'no-reply@resend.dev',
    to: 'hengsokly23@gmail.com',
    subject: 'Hello World',
    react: <WelcomeTemplate name='Sokly' />
  })

  return NextResponse.json({})
}