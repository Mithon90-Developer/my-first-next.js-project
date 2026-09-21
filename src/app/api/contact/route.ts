import { createClient } from "@sanity/client";
import { Resend } from "resend";

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-09-21",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = data.name;
    const email = data.email;
    const subject = data.subject;
    const message = data.message;

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Save message to Sanity
    await writeClient.create({
      _type: "contactMessage",
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Contact Message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <hr>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Email error:", error);

      return Response.json(
        {
          success: false,
          message: "Message was saved, but email notification failed.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}