import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumComponent, AlbumContext, AlbumItem } from '../../../components'


export default function LedZeppelinIII({ name, release, cover}) {
    const [albums, setAlbums] = useContext(AlbumContext)
    const params = useParams()
    // console.log(albums[0].name)
    return (
        <div>
            <AlbumComponent name="Led Zeppelin I" release="1970" cover="https://upload.wikimedia.org/wikipedia/en/5/5f/Led_Zeppelin_-_Led_Zeppelin_III.png" key={albums.id}/>
        </div>
    )
}
