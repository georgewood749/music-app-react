import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './style.css'

export default function NotFound() {
    const location = useLocation()
    return (
        <>
            <h1>Page not found!</h1>
            <button className='home-btn' to="/">Go home</button>
        </>

    )
}
