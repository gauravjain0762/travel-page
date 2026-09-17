import mongoose, { Schema, models, model } from "mongoose";

export interface AdminDoc {
  _id: mongoose.Types.ObjectId;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

const AdminSchema = new Schema<AdminDoc>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.Admin || model<AdminDoc>("Admin", AdminSchema);
