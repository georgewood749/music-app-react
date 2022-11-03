import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AlbumForm, AlbumList } from '../../components'
import Artist from './Artist'

export default function Artists() {

    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };

    return (
        <div>
            <h1>Artists</h1>
            <br />
            <Artist name="Led Zeppelin" genre="Classic Rock" intro="Led Zeppelin were an English rock band formed in London in 1968. The group comprised vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock." />
            <br />
            <AlbumForm addAlbum={addAlbum} />
            <AlbumList albums={albums} updateAlbums={updateAlbums} />
            <Outlet />
        </div>
    )
}
