import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      company,
      phone,
      email,
      location,
      businessType,
      requirements,
    } = body;
    

  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

await transporter.verify();
console.log("SMTP Connected Successfully");

    // ==========================
    // Email to Admin
    // ==========================

    await transporter.sendMail({
      from: `"VOLTERRA Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Site Survey Request",

      html: `
<div style="font-family:Arial,sans-serif;padding:30px">

<h2 style="color:#65A30D">
🚗 New EV Charging Enquiry
</h2>

<hr>

<p><strong>Name:</strong> ${fullName}</p>

<p><strong>Company:</strong> ${company}</p>

<p><strong>Phone:</strong> ${phone}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Location:</strong> ${location}</p>

<p><strong>Business Type:</strong> ${businessType}</p>

<p><strong>Requirements:</strong></p>

<div
style="
background:#f8fafc;
padding:20px;
border-radius:10px;
"
>
${requirements}
</div>

</div>
`,
    });

    // ==========================
    // Confirmation Email
    // ==========================

    await transporter.sendMail({
      from: `"VOLTERRA Energy" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting VOLTERRA Energy",

      html: `
<div style="font-family:Arial,sans-serif;padding:30px">

<h2 style="color:#65A30D">
Thank You for Contacting VOLTERRA Energy
</h2>

<p>Hello ${fullName},</p>

<p>
We have successfully received your enquiry regarding your EV charging project.
</p>

<p>
Our technical team will review your requirements and contact you soon.
</p>

<hr>

<h3>Your Submitted Details</h3>

<p><strong>Location:</strong> ${location}</p>

<p><strong>Business Type:</strong> ${businessType}</p>

<p><strong>Phone:</strong> ${phone}</p>

<br>

<p>
Regards,<br>
<strong>VOLTERRA Energy</strong><br>
www.volterraenergy.in
</p>

</div>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
 } catch (error) {
  console.error("========== EMAIL ERROR ==========");
  console.error(error);
  console.error("=================================");

  return NextResponse.json(
    {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    },
    {
      status: 500,
    }
  );
}
}