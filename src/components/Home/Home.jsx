import React, { useEffect } from 'react'
import { MovieListing } from "../index"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../features/featureSlices/movieSlice'
import { fetchAsyncShows } from '../../features/featureSlices/showsSlice'

const Home = () => {
    const dispatch = useDispatch()
    const movieText = "ant"
    const showText = "breaking"
    useEffect(() => {
        const fetchMovies = async () => {
            dispatch(fetchAsyncMovies(movieText, 2))
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