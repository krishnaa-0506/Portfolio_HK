import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('Received request to /api/email-reply');

    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log('Request body:', body);
    } catch (parseError) {
      console.error('Request body parsing error:', parseError);
      return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, mobile, message } = body;

    // Validate input
    if (!name || !email || !mobile || !message) {
      console.log('Validation failed: Missing fields');
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Validate RESEND_API_KEY
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({ message: 'Server configuration error: Missing API key' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Initialized Resend client');

    // Send confirmation email to viewer
    console.log('Sending email to viewer:', email);
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
    console.log('Viewer email sent successfully');

    // Send notification email to you
    console.log('Sending email to owner: krishnaahari05@gmail.com');
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
    console.log('Owner email sent successfully');

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error in /api/email-reply:', error.message, error.stack);
    return NextResponse.json({ message: 'Failed to send emails: ' + error.message }, { status: 500 });
  }
}