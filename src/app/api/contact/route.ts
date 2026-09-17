import { NextRequest, NextResponse } from "next/server";
import { getMongoConnection } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "fullName, email, and message are required." },
        { status: 400 }
      );
    }

    await getMongoConnection();
    await ContactSubmission.create({ fullName, email, message });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Contact submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
