import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumComponent, AlbumContext, AlbumItem } from '../../../components'


export default function LedZeppelinIV({ name, release, cover}) {
    const [albums, setAlbums] = useContext(AlbumContext)
    const params = useParams()
    // console.log(albums[0].name)
    return (
        <div>
            <AlbumComponent name="Led Zeppelin I" release="1971" cover="https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" key={albums.id}/>
        </div>
    )
}
