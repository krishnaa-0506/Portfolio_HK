import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, mobile, message } = await req.json();

    if (!name || !email || !mobile || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Hari Krishnaa <onboarding@resend.dev>',
      to: email,
      subject: 'Message Received - Hari Krishnaa',
      text: `Dear ${name},\n\nThank you for reaching out! Your message has been received.\n\nBest regards,\nHari Krishnaa`,
      html: `<p>Dear ${name},</p><p>Thank you for reaching out! Your message has been received.</p><p>Best regards,<br>Hari Krishnaa</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email: ' + error.message }, { status: 500 });
  }
}