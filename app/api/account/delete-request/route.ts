import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your email service
// For Gmail: Use an App Password (not your regular password)
// Visit: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "luplegstudios@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // Use Gmail App Password
  },
});

interface DeleteRequestBody {
  email: string;
  password: string;
  reason?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: DeleteRequestBody = await request.json();

    // Validate input
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Prepare email content
    const emailContent = `
      <h2>New Account Deletion Request</h2>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      
      <h3>User Information:</h3>
      <ul>
        <li><strong>Email:</strong> ${body.email}</li>
        <li><strong>Password Provided:</strong> Yes (requires verification)</li>
      </ul>
      
      ${
        body.reason
          ? `<h3>Reason for Deletion:</h3>
      <p>${body.reason}</p>`
          : ""
      }
      
      <h3>Action Required:</h3>
      <p>Please verify this deletion request by:</p>
      <ol>
        <li>Confirming the user's identity by verifying their password</li>
        <li>Checking if the email matches an existing account</li>
        <li>Proceeding with account deletion if verified</li>
      </ol>
      
      <p><em>Note: The password has been submitted by the user and should be verified against your authentication system.</em></p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "luplegstudios@gmail.com",
      to: "luplegstudios@gmail.com",
      subject: `Account Deletion Request - ${body.email}`,
      html: emailContent,
      replyTo: body.email,
    });

    // Send confirmation email to user
    const userEmailContent = `
      <h2>Account Deletion Request Received</h2>
      <p>Hello,</p>
      <p>We have received your request to delete your account and associated data.</p>
      
      <h3>What happens next:</h3>
      <ol>
        <li>Our team will verify your request within 24 hours</li>
        <li>We will send you a confirmation link via email</li>
        <li>Click the confirmation link to complete the deletion process</li>
      </ol>
      
      <p>If you did not request this action, please reply to this email immediately.</p>
      
      <p>Best regards,<br/>Lupleg Studios</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER || "luplegstudios@gmail.com",
      to: body.email,
      subject: "Account Deletion Request Received",
      html: userEmailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Deletion request submitted successfully. Check your email for confirmation.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing deletion request:", error);

    return NextResponse.json(
      {
        error: "Failed to process deletion request. Please try again later.",
      },
      { status: 500 },
    );
  }
}
