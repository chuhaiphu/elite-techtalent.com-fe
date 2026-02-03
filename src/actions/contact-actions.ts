"use server";

import React from "react";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactEmail } from "@/components/emails/contact-email";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  message: string;
}

// Background function to send emails (fire and forget)
async function sendEmailsInBackground(formData: ContactFormData) {
  try {
    const { firstName, lastName, email, contactNumber, message } = formData;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify transporter configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP credentials not configured");
      return;
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "info@elite-techtalent.com";

    // Render email templates using react-email
    const recipientEmailHtml = await render(
      React.createElement(ContactEmail, {
        type: "recipient",
        firstName,
        lastName,
        email,
        contactNumber,
        message,
      })
    );

    const confirmationEmailHtml = await render(
      React.createElement(ContactEmail, {
        type: "confirmation",
        firstName,
        lastName,
        email,
        contactNumber,
        message,
      })
    );

    // Email to recipient (info@elite-techtalent.com)
    const recipientMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: recipientEmailHtml,
    };

    // Confirmation email to user
    const confirmationMailOptions = {
      from: `"Elite Tech Talent" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Elite Tech Talent",
      html: confirmationEmailHtml,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(recipientMailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);
  } catch (error) {
    console.error("Error sending email in background:", error);
    // Silently fail - don't throw error to user
  }
}

export async function sendContactEmailAction(formData: ContactFormData) {
  try {
    // Start sending emails in background (fire and forget)
    // Don't await - return success immediately
    sendEmailsInBackground(formData).catch((error) => {
      console.error("Background email sending failed:", error);
    });

    // Return success immediately
    return {
      success: true,
      message: "Your message has been received. We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error in sendContactEmailAction:", error);
    return {
      success: false,
      error: "Failed to process your request. Please try again.",
    };
  }
}
