import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, countryCode, contactNumber, message, recaptcha } =
    req.body;

  // Validate required fields
  if (!name || !email || !countryCode || !contactNumber || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Verify reCAPTCHA (in a real app, you would check this with Google's API)
  if (!recaptcha) {
    return res.status(400).json({ message: "reCAPTCHA verification failed" });
  }

  // Optional: Verify reCAPTCHA with Google
  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({ message: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    // Proceed anyway if there's an error with the verification service
  }

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER || "abhiket29@gmail.com",
      pass: process.env.EMAIL_PASS || "puio fuxl qsfa boqe",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Format the message with styling
  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
      
      <div style="margin: 20px 0;">
        <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 8px 0;"><strong>Contact Number:</strong> ${countryCode} ${contactNumber}</p>
      </div>
      
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 20px;">
        <h3 style="margin-top: 0; color: #475569;">Message:</h3>
        <p style="white-space: pre-line;">${message}</p>
      </div>
      
      <p style="font-size: 12px; color: #64748b; margin-top: 30px; text-align: center;">
        This message was sent from your website contact form.
      </p>
    </div>
  `;

  try {
    console.log("Sending email...");

    // Configure email options
    const mailOptions = {
      from: `Website Contact Form <${
        process.env.EMAIL_USER || "priya@taabsolutions.com"
      }>`,
      to: process.env.RECIPIENT_EMAIL || "abhiket29@gmail.com",
      replyTo: email, // Allow direct reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      html: htmlMessage,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}
