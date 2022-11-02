import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumComponent, AlbumContext, AlbumItem } from '../../../components'

export default function Album(name, release, cover) {
    const [albums, setAlbums] = useContext(AlbumContext)
    const params = useParams()
    console.log(albums[0].name)
    return (
        <div>
            <AlbumComponent name={albums.name} release={albums.release} cover={albums.cover} />
        </div>
    )
}
