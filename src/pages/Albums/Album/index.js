import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumComponent, AlbumContext, AlbumItem } from '../../../components'

export default function Album() {
    const [albums, setAlbums] = useContext(AlbumContext)
    const params = useParams()

    // const [albums, updateAlbums] = useState([]);

    // const addAlbum = (album) => {
    //     updateAlbums([...albums, album])
    //     return album
    // };

    const [filteredAlbum, setFilteredAlbum] = useState({})

    const newAlbum = albums.filter((album) => album.name === params.album)
    

    const findArtist = () => {
        setFilteredAlbum(newAlbum);
    }

    // console.log(params)
    // console.log("newAlbum", newAlbum[0]);

    return (
        <div>
            <AlbumComponent name={newAlbum[0].name} release={newAlbum[0].release} cover={newAlbum[0].cover} />
            {/* {albums.map(album => (
                <AlbumComponent name={album.name} release={album.release} cover={album.cover} key={album.id} />
            ))} */}
        </div>
    )
}
