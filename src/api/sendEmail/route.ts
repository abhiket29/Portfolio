import nodemailer from "nodemailer";

export async function POST(req: any) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
    });
  }

  const { name, email, contactNumber, countryCode, countryDialCode, message, serviceType } = await req.json();

  if (!name || !email || !contactNumber || !countryCode || !countryDialCode || !message || !serviceType) {
    console.log("Missing fields:", { name, email, contactNumber, countryCode, countryDialCode, message });
    return new Response(JSON.stringify({ message: "All fields are required" }), {
      status: 400,
    });
  }

  // Set subject for the email
  const subject = "Contact Us";
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: "abhiket29@gmail.com",
      pass: "puio fuxl qsfa boqe",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    console.log("Sending email...");

    // Send the email with the dial code and contact number
    await transporter.sendMail({
      from: `Taab Solutions ${email}`,
      to: "abhiket29@gmail.com",
      subject: subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${countryDialCode} ${contactNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
        // <p><strong>Seeking Solutions:</strong> ${serviceType}</p>
      `,
    });

    console.log("Email sent successfully");
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email", error: error.message }), {
      status: 500,
    });
  }
}
