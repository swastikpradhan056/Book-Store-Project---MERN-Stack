import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt properties
  }
);

export const Book = mongoose.model("Book", bookSchema);
