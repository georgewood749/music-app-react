import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Albums() {
    return (
        <div>
            <h1>Zeppelin Albums</h1>
            <br/>
            <Link to="Led Zeppelin I">Led Zeppelin I</Link>
            <br/>
            <Link to="Led Zeppelin II">Led Zeppelin II</Link>
            <br/>
            <Link to="Led Zeppelin III">Led Zeppelin III</Link>
            <br/>
            <Link to="Led Zeppelin IV">Led Zeppelin IV</Link>
            <Outlet />
        </div>
    )
}
