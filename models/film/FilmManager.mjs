import Film from "./Film.mjs"
import GenreManager from "../genre/GenreManager.mjs"

class FilmManager {
  static async loadList(searchParams = {}) {
    try {
      const genres = await GenreManager.loadList()
      return await Film.find(searchParams).populate("genre")
    } catch (error) {
      console.log(error)
    }
  }
  static async getById(id) {
    try {
      return await Film.where("_id").equals(id)
    } catch (error) {
      console.log(error)
    }
  }
  static async create(newFilm) {
    try {
      const film = await Film.create(newFilm)
      return film
    } catch (error) {
      console.log(error)
    }
  }
  static async update(id, newProps) {
    try {
      const film = await Film.findByIdAndUpdate(id, newProps, {
        new: true,
        runValidators: true,
      })
      return film
    } catch (error) {
      console.log(error)
    }
  }
  static async delete(id) {
    try {
      await Film.findByIdAndDelete(id)
    } catch (error) {
      console.log(error)
    }
  }
}

export default FilmManager
