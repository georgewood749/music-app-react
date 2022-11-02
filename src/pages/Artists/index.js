import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Artists() {
    return (
        <div>
            <h1>Artists</h1>
            <br />
            <Link to="Led Zeppelin">Led Zeppelin</Link>
            <br />
            <Outlet />
        </div>
    )
}
