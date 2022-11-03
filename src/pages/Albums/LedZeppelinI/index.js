import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumComponent, AlbumContext, AlbumItem } from '../../../components'


export default function LedZeppelinI({ name, release, cover}) {
    const [albums, setAlbums] = useContext(AlbumContext)
    const params = useParams()
    // console.log(albums[0].name)
    return (
        <div>
            <AlbumComponent name="Led Zeppelin I" release="1969" cover="https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png" key={albums.id}/>
        </div>
    )
}
