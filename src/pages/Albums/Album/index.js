import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumComponent, AlbumContext, AlbumItem } from '../../../components'

export default function Album(name, release, cover) {
    const [albumsContext, setAlbumsContext] = useContext(AlbumContext)
    const params = useParams()

    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
        console.log(album)
    };

    return (
        <div>
            <AlbumComponent name={albums.album} release={albums.release} cover={albums.cover} key={albums.id} />
        </div>
    )
}
