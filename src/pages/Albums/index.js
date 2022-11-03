import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { AlbumContext } from '../../components'
import Album from './Album'
import { NavLink } from 'react-router-dom';
import AlbumForm from '../../components/AlbumForm';
import AlbumList from '../../components/AlbumList'
import './albums.css'



export default function Albums(album) {
    // const [albums, setAlbums] = useContext(AlbumContext)
    const [albums, updateAlbums] = useState([]);
const addAlbum = (album) => {
    updateAlbums([...albums, album])
}
    return (
        <>
            <h1>Zeppelin Albums</h1>
            <div className="page">
            <div className="addAlbum">
            < AlbumForm addAlbum={addAlbum} />
            <ul>
                <li className="newAlbum">
                    <AlbumList albums={albums} updateAlbums={updateAlbums}/>
                </li>
            </ul>
            </div>
            <ul>
                <li className='link'><NavLink to="LedZeppelinI">LedZeppelinI</NavLink></li>
                <li className='link'><NavLink to="LedZeppelinII">LedZeppelinII</NavLink></li>
                <li className='link'><NavLink to="LedZeppelinIII">LedZeppelinIII</NavLink></li>
                <li className='link'><NavLink to="LedZeppelinIV">LedZeppelinIV</NavLink></li>
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
        </>
    )
}
