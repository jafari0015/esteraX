import { NextRequest, NextResponse } from "next/server";
import { getSanityClient, isSanityConfigured } from "@/libs/sanity";

export async function POST(req: NextRequest) {
  try {
    if (!isSanityConfigured()) {
      return NextResponse.json(
        { message: "Contact service is not configured." },
        { status: 503 }
      );
    }

    const data = await req.json();
    const { firstName, lastName, email, phone, message, receiveUpdates } = data;

    await getSanityClient().create({
      _type: "contactMessage",
      firstName,
      lastName,
      email,
      phone,
      message,
      receiveUpdates,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
