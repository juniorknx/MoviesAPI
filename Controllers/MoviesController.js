const Filmes = require('../models/Filmes');

module.exports = class MoviesController {
    static async insertMovie(req, res) {
        const moviesData = {
            title: req.body.title,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            duration: req.body.duration,
            year: req.body.year
        }
        await Filmes.create(moviesData);
        res.redirect('/movies');
    }

    static async listenMovies(req, res) {
        const listMovies = await Filmes.findAll({ raw: true })
        res.json(listMovies);
    }

    static async listenMoviesById(req, res) {
        const { id } = req.params
        const listMovies = await Filmes.findOne({ where: { id: id }, raw: true })
        res.json(listMovies);
    }

    static async updateMovies(req, res) {
        const { id } = req.body

        const moviesData = {
            title: req.body.title,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            duration: req.body.duration,
            year: req.body.year
        }
        await Filmes.update(moviesData, { where: { id: id } })
        res.redirect('/movies');
    }

    static async deleteMovies(req, res) {
        const { id } = req.body
        await Filmes.destroy({ where: { id: id } })
        res.redirect('/movies')
    }
}