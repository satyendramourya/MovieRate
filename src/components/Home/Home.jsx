import React, { useEffect } from 'react'
import { MovieListing } from "../index"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/featureSlices/movieSlice'


const Home = () => {
    const dispatch = useDispatch()
    const movieText = "Movies"
    const showText = "Shows"
    useEffect(() => {
        const fetchMovies = async () => {
            dispatch(fetchAsyncMovies(movieText))
            dispatch(fetchAsyncShows(showText))
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