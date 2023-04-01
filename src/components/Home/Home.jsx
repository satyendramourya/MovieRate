import React, { useEffect, useState } from 'react'
import { MovieListing } from "../index"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../features/featureSlices/movieSlice'
import { fetchAsyncShows } from '../../features/featureSlices/showsSlice'

const Home = () => {
    const dispatch = useDispatch()
    const movieText = "ant"
    const showText = "breaking"
    const [pageNo, setPageNo] = useState(1)
    useEffect(() => {
        const fetchMovies = async () => {
            dispatch(fetchAsyncMovies(movieText, pageNo))
            dispatch(fetchAsyncShows(showText, pageNo))
        }
        fetchMovies()
    }, [dispatch, pageNo])

    return (
        <div>
            <button onClick={() => {
                setPageNo(pageNo + 1)
                console.log(pageNo)
            }}> increase page no</button>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home