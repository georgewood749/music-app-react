import React, { useContext, useState } from 'react'
import { AlbumContext } from '../AlbumContext';



export default function AlbumForm({ addAlbum, albums }) {

    const [albumsContext, setAlbumsContext] = useContext(AlbumContext)

    const [albumInfo, setAlbumInfo] = useState({
        name: "",
        release: "",
        cover: "",
    });

    const handleChange = (e) => {
        setAlbumInfo({ ...albumInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAlbum(albumInfo);
        setAlbumsContext([
            ...albums,
            { name: "", release: "", cover: "", id: Math.random() * 1000 }
        ]);
        console.log(albums)
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Album Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Album Name"
                        value={albumInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="release"
                        placeholder="Release date"
                        value={albumInfo.release}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="img"
                        name="cover"
                        placeholder="Album cover URL"
                        value={albumInfo.cover}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Submit new Album</button>
                </div>
            </form>
        </div>
    );
}
