import React, { useState } from 'react'

export default function AlbumItem({ album, updateAlbums }) {
    const [backgroundColor, setBackgroundColor] = useState('white');

    function handleDelete() {
        console.log(album.id);
        updateAlbums(prevAlbums => prevAlbums.filter((el) => album.id !== el.id))
    }

    const likeAlbum = () => {
        setBackgroundColor(prev => prev == "white" ? "green" : "white")
    }

    return (
        <div className="card" key={album.id}>
            <h3 className="card-name">{album.name}</h3>
            <em>Release date: {album.release}</em>
            <br></br>
            <img style={{ width: 500 }} src={album.cover}></img>
            <br></br>
            <button style={{ width: 500 }} onClick={handleDelete} className="trash-btn">X</button>
            <br></br>
            <button style={{ backgroundColor: backgroundColor, width: 500 }} onClick={likeAlbum}>👍</button>
        </div>
    )
}
