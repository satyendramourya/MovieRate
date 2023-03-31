import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'


import "./MovieListing.scss"

const MovieListing = () => {
    const [movieList, setMovieList] = useState(true)
    const [pages, setPages] = useState(1)

    const showMovies = () => {
        setMovieList(true)
        console.log("movies")
    }

    const showShows = () => {
        setMovieList(false)
        console.log("shows")
    }


    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderMovies, renderShows = "";

    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
        ) : (
            <div className="shows-error">
                <h3>{shows.Error}</h3>
            </div>
        );
    return (
        <div className="movie-wrapper">
            <div className='categories'>
                <button onClick={() => { showMovies() }}>Movies</button>
                <button onClick={() => { showShows() }}>Shows</button>
            </div>
            <div className="movie-list">
                <div className='movie-container'> {movieList ? renderMovies : renderShows} </div>
            </div>

            <div className='pages'>
                <button onClick={() => { setPages(pages - 1) }}>Prev</button>
                <button onClick={() => { setPages(pages + 1) }}>Next</button>
            </div>
        </div>
    )
}

export default MovieListing