import { NextRequest, NextResponse } from "next/server";
import {client } from "@/libs/sanity"
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, message, receiveUpdates } = data;

    await client.create({
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
