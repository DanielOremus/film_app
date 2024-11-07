import mongoose from "mongoose"
import config from "../config/default.mjs"
export default async function () {
  try {
    await mongoose.connect(`${config.mongoURI}/${config.databaseName}`)
    console.log("Connected to DB")
  } catch (error) {
    console.log(error)
  }
}
