import { Schema, models, model } from "mongoose";

export interface PlanningSubmissionDoc {
  journeyType: string;
  travelingWith: string;
  travelStyle: string;
  timeframe: string;
  moreInfo?: string;
  name: string;
  email: string;
  phone: string;
  dates?: string;
  budget?: string;
  requirements?: string;
  createdAt: Date;
}

const PlanningSubmissionSchema = new Schema<PlanningSubmissionDoc>({
  journeyType: { type: String, required: true },
  travelingWith: { type: String, required: true },
  travelStyle: { type: String, required: true },
  timeframe: { type: String, required: true },
  moreInfo: String,
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dates: String,
  budget: String,
  requirements: String,
  createdAt: { type: Date, default: Date.now },
});

export default models.PlanningSubmission ||
  model<PlanningSubmissionDoc>("PlanningSubmission", PlanningSubmissionSchema);
