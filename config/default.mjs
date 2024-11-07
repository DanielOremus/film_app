import dotenv from "dotenv"
dotenv.config()

export default Object.freeze({
  databaseName: process.env.DB_NAME,
  mongoURI: process.env.DB_URL,
  port: process.env.PORT,
})
