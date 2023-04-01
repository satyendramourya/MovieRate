import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/user.png"
import { useDispatch } from 'react-redux'
import "./Header.scss"
import { fetchAsyncMovies } from '../../features/featureSlices/movieSlice'
import { fetchAsyncShows } from '../../features/featureSlices/showsSlice'


const Header = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        if (term.trim() === '') {
            return alert('Please enter a search term')
        }
        e.preventDefault()
        dispatch(fetchAsyncMovies(term, 2))
        dispatch(fetchAsyncShows(term))
        setTerm('')
    }
    return (
        <div className="header">

            <div className="logo"><Link to="/">Movie App</Link></div>
            <div className="search-bar">
                <form onSubmit={submitHandler} >
                    <input type="text" value={term} placeholder='Search Movies or Shows' onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit'> <i className='fa fa-search'></i></button>
                </form>
            </div>

            <div className="user_image">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header