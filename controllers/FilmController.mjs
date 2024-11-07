import FilmManager from "../models/film/FilmManager.mjs"

class FilmController {
  static async getList(req, res) {
    try {
      const searchParams = {}
      for (const param in req.query) {
        if (req.query[param]) {
          searchParams[param] = req.query[param]
        }
      }
      const list = await FilmManager.loadList(searchParams)
      res.render("films/filmList", {
        films: list,
        title: "Film List",
      })
    } catch (error) {
      res.status(500).json({ success: false, msg: error.message })
    }
  }
}

export default FilmController
