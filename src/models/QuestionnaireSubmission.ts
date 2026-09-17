import { Schema, models, model } from "mongoose";

export interface QuestionnaireSubmissionDoc {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  cityState: string;
  destination: string;
  undecided?: string;
  travelDates?: string;
  datesFlexible?: string;
  travelerCount?: string;
  childrenAges?: string;
  celebrating?: string;
  vacationStyles?: string[];
  otherStyle?: string;
  accommodationType?: string;
  hotelBrands?: string;
  favoriteHotel?: string;
  leastFavoriteHotel?: string;
  budget?: string;
  includesFlights?: string;
  lovedDestinations?: string;
  wouldntReturn?: string;
  bucketList?: string;
  threeWords?: string;
  unforgettable?: string;
  favoriteTrips?: string;
  anythingElse?: string;
  createdAt: Date;
}

const QuestionnaireSubmissionSchema = new Schema<QuestionnaireSubmissionDoc>({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cityState: { type: String, required: true },
  destination: { type: String, required: true },
  undecided: String,
  travelDates: String,
  datesFlexible: String,
  travelerCount: String,
  childrenAges: String,
  celebrating: String,
  vacationStyles: [String],
  otherStyle: String,
  accommodationType: String,
  hotelBrands: String,
  favoriteHotel: String,
  leastFavoriteHotel: String,
  budget: String,
  includesFlights: String,
  lovedDestinations: String,
  wouldntReturn: String,
  bucketList: String,
  threeWords: String,
  unforgettable: String,
  favoriteTrips: String,
  anythingElse: String,
  createdAt: { type: Date, default: Date.now },
});

export default models.QuestionnaireSubmission ||
  model<QuestionnaireSubmissionDoc>(
    "QuestionnaireSubmission",
    QuestionnaireSubmissionSchema
  );
