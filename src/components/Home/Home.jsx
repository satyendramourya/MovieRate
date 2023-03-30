import React, { useEffect } from 'react'
import { MovieListing } from "../index"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'


const Home = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchMovies = async () => {
            dispatch(fetchAsyncMovies())
            dispatch(fetchAsyncShows())
        }
        fetchMovies()
    }, [dispatch])

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home