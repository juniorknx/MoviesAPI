const express = require('express');
const MoviesController = require('../Controllers/MoviesController');
const router = express.Router();


router.get('/', MoviesController.insertMovie);
router.get('/movies', MoviesController.listenMovies);
router.get('/movies/:id', MoviesController.listenMoviesById);
router.post('/movies/edit/:id', MoviesController.updateMovies);
router.post('/movies/delete/:id', MoviesController.deleteMovies);

module.exports = router;