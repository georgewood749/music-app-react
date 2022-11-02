import React, { useState } from 'react'

export default function AlbumComponent ({ name, release, cover })  {

    const [backgroundColor, setBackgroundColor] = useState("white");

    const likeAlbum = () => {
        setBackgroundColor(prev => prev == "white" ? "green" : "white")
    }

    return (
        <div>
            <h3>{name}</h3>
            <em>Release date: {release}</em>
            <br></br>
            <img width="500px" src={cover}></img>
            <br></br>
            <button style={{backgroundColor: backgroundColor,  width:"500px"}} onClick={likeAlbum}>👍</button>
        </div>
    )
}


