import mongoose, { Schema } from "mongoose"

const filmSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [3, "Title must be at least 3 chars long"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [10, "Description must be at least 10 chars long"],
    trim: true,
  },
  genre: {
    type: [mongoose.Schema.Types.ObjectId],
    required: [true, "Film must have at least 1 genre"],
    ref: "Genre",
  },
})

export default new mongoose.model("Film", filmSchema)
