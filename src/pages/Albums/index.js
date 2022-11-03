import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AlbumContext, AlbumForm } from '../../components'


// function testLog (album) {
//     console.log(album)
// }

export default function Albums() {
    // const [albumsContext, setAlbumsContext] = useContext(AlbumContext)
    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };
    console.log("albums:", albums)
    return (
        <div>
            <h1>Zeppelin Albums</h1>
            <AlbumForm addAlbum={addAlbum} />
            <br />
            <ul>
                <Link to="LedZeppelinI">Led Zeppelin I</Link>

                <Link to="LedZeppelinII">Led Zeppelin II</Link>

                <Link to="LedZeppelinIII">Led Zeppelin III</Link>

                <Link to="LedZeppelinIV">Led Zeppelin IV</Link>
                {albums.map((album) => (
                    <li key={album.id}>
                        <Link to={album.name}>{album.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}
