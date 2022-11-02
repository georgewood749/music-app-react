import React, { createContext, useState } from "react";

let albumData = [
    {
        name: "Led Zeppelin I",
        release: "1969",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png",
        id: Math.random() * 1000
    },
    {
        name: "Led Zeppelin II",
        release: "1969",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/20/Led_Zeppelin_-_Led_Zeppelin_II.jpg",
        id: Math.random() * 1000
    },
    {
        name: "Led Zeppelin III",
        release: "1970",
        cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Led_Zeppelin_-_Led_Zeppelin_III.png",
        id: Math.random() * 1000
    },
    {
        name: "Led Zeppelin IV",
        release: "1971",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
        id: Math.random() * 1000
    }
];

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
    const [albums, setAlbums] = useState(albumData);
    return (
        <AlbumContext.Provider value={[albums, setAlbums]}>
            {props.children}
        </AlbumContext.Provider>
    )
}