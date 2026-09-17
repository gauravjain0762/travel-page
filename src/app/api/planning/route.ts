import { NextRequest, NextResponse } from "next/server";
import { getMongoConnection } from "@/lib/mongodb";
import PlanningSubmission from "@/models/PlanningSubmission";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { journeyType, travelingWith, travelStyle, timeframe, name, email, phone } = body;

    if (!journeyType || !travelingWith || !travelStyle || !timeframe || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await getMongoConnection();
    await PlanningSubmission.create(body);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Planning submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
