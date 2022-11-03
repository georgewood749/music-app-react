import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { AlbumContext } from '../../components'
import Album from './Album'
import { NavLink } from 'react-router-dom';
import AlbumForm from '../../components/AlbumForm';
import AlbumList from '../../components/AlbumList'



export default function Albums(album) {
    // const [albums, setAlbums] = useContext(AlbumContext)
    const [albums, updateAlbums] = useState([]);
const addAlbum = (album) => {
    updateAlbums([...albums, album])
}
    return (
        <div>
            <h1>Zeppelin Albums</h1>
            <ul>
                <li><NavLink to="LedZeppelinI">LedZeppelinI</NavLink></li>
                <li><NavLink to="LedZeppelinII">LedZeppelinII</NavLink></li>
                <li><NavLink to="LedZeppelinIII">LedZeppelinIII</NavLink></li>
                <li><NavLink to="LedZeppelinIV">LedZeppelinIV</NavLink></li>
            </ul>
            < AlbumForm addAlbum={addAlbum} />
            <ul>
                <li>
                    <AlbumList albums={albums} updateAlbums={updateAlbums}/>
                </li>
            </ul>
            {/* <br/>
            <Link to="LedZeppelinI">Led Zeppelin I</Link>
            <br/>
            <Link to="LedZeppelinII">Led Zeppelin II</Link>
            <br/>
            <Link to="LedZeppelinIII">Led Zeppelin III</Link>
            <br/>
            <Link to="LedZeppelinIV">Led Zeppelin IV</Link>
            <Outlet /> */}
            {/* <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        <Link to={{ 
                            pathname: `${album.name}`, 
                            state:{
                                name: album.name, 
                                release: album.release,
                                cover: album.cover
                        }}} >{album.name}</Link> 
                    </li>
                ))}
            </ul> */}
            <Outlet />
        </div>
    )
}
