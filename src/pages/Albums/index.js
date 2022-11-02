import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AlbumContext } from '../../components'


export default function Albums() {
    const [albums, setAlbums] = useContext(AlbumContext)
    console.log(albums)
    return (
        <div>
            <h1>Zeppelin Albums</h1>
            {/* <br/>
            <Link to="LedZeppelinI">Led Zeppelin I</Link>
            <br/>
            <Link to="LedZeppelinII">Led Zeppelin II</Link>
            <br/>
            <Link to="LedZeppelinIII">Led Zeppelin III</Link>
            <br/>
            <Link to="LedZeppelinIV">Led Zeppelin IV</Link>
            <Outlet /> */}
            <ul>
                {albums.map((album) => (
                    <li key={album.name}>
                        <Link to={album.id}>{album.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}
