import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error('Request body parsing error:', parseError);
      return NextResponse.json({ message: 'TYPE Clearly' }, { status: 400 });
    }

    const { name, email, mobile, message } = body;

    // Validate input
    if (!name || !email || !mobile || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Validate RESEND_API_KEY
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({ message: 'Server configuration error: Missing API key' }, { status: 500 });
    }

    // Send confirmation email to viewer
    await resend.emails.send({
      from: 'Hari Krishnaa <onboarding@resend.dev>',
      to: email,
      subject: 'Message Received - Hari Krishnaa',
      text: `
Dear ${name},

Thank you for reaching out! Your message has been received, and I will reply in a professional manner within 24-48 hours.

Best regards,
Hari Krishnaa
      `,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out! Your message has been received, and I will reply in a professional manner within 24-48 hours.</p>
        <p>Best regards,<br>Hari Krishnaa</p>
      `,
    });

    // Send notification email to you
    await resend.emails.send({
      from: 'Hari Krishnaa <onboarding@resend.dev>',
      to: 'krishnaahari05@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
New message from ${name}:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message: ${message}
      `,
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Email sending error:', error.message, error.stack);
    return NextResponse.json({ message: 'Failed to send emails: ' + error.message }, { status: 500 });
  }
}