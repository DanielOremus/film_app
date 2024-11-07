import mongoose, { Schema } from "mongoose"

const genreSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [3, "Title must be at least 3 chars long"],
    trim: true,
  },
})

export default new mongoose.model("Genre", genreSchema)
