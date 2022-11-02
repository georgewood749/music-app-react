import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function NotFound() {
    const location = useLocation()
    return (
        <>
            <h1>Page not found! Last known page was: {location.pathname}</h1>
            <Link to="/">Go home.</Link>
        </>

    )
}
