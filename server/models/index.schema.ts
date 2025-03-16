import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel("User", {
  email: { type: String, unique: true },
  password: { type: String },
  username: { type: String, unique: true },
});

export const Note = defineMongooseModel("Note", {
  user: { type: String, ref: "User", required: true },
  name: String,
  score: Number,
  comment: String,
  date: String,
  fragrance: Number,
  flavor: Number,
  aftertaste: Number,
  acidity: Number,
  body: Number,
  uniformity: {
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
    5: Boolean,
  },
  cleanCup: {
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
    5: Boolean,
  },
  sweetness: {
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
    5: Boolean,
  },
  balance: Number,
  overall: Number,
  taint: Number,
  fault: Number,
});
