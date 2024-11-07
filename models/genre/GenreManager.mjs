import Genre from "./Genre.mjs"

class GenreManager {
  static async loadList() {
    try {
      return await Genre.find()
    } catch (error) {
      console.log(error)
    }
  }
}

export default GenreManager
