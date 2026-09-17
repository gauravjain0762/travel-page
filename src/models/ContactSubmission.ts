import { Schema, models, model } from "mongoose";

export interface ContactSubmissionDoc {
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSubmissionSchema = new Schema<ContactSubmissionDoc>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.ContactSubmission ||
  model<ContactSubmissionDoc>("ContactSubmission", ContactSubmissionSchema);
