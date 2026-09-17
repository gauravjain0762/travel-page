import { NextRequest, NextResponse } from "next/server";
import { getMongoConnection } from "@/lib/mongodb";
import QuestionnaireSubmission from "@/models/QuestionnaireSubmission";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, email, phone, cityState, destination } = body;

    if (!firstName || !email || !phone || !cityState || !destination) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await getMongoConnection();
    await QuestionnaireSubmission.create(body);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Questionnaire submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
