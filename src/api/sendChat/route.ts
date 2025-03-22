import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, userName, message } = await req.json();

    // Setup transporter for Gmail (Replace with your SMTP credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "priya@taabsolutions.com",
        pass: "xjaofjsiiedivzar",
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "abhiket29@gmail.com",
      subject: `New Chat Request from ${userName}`,
      text: `Name: ${userName}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
