// import React, { useContext, useState } from 'react'
// import { AlbumContext } from '../AlbumContext';



// export default function AlbumForm({ addAlbum, albums }) {

//     const [albumsContext, setAlbumsContext] = useContext(AlbumContext)

//     const [albumInfo, setAlbumInfo] = useState({
//         name: "",
//         release: "",
//         cover: "",
//     });

//     const handleChange = (e) => {
//         setAlbumInfo({ ...albumInfo, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addAlbum(albumInfo);
//         setAlbumsContext([
//             ...albums,
//             { name: "", release: "", cover: "", id: Math.random() * 1000 }
//         ]);
//         console.log(albums)
//     };

//     return (
//         <div className="form-container">
            // <form onSubmit={handleSubmit}>
            //     <div>
            //         <h3>Album Form</h3>
            //     </div>
            //     <div>
            //         <input
            //             type="text"
            //             name="name"
            //             placeholder="Album Name"
            //             value={albumInfo.name}
            //             onChange={handleChange}
            //         />
            //     </div>
            //     <div>
            //         <input
            //             type="text"
            //             name="release"
            //             placeholder="Release date"
            //             value={albumInfo.release}
            //             onChange={handleChange}
            //         />
            //     </div>
            //     <div>
            //         <input
            //             type="img"
            //             name="cover"
            //             placeholder="Album cover URL"
            //             value={albumInfo.cover}
            //             onChange={handleChange}
            //         />
            //     </div>
            //     <div>
            //         <button>Submit new Album</button>
            //     </div>
            // </form>
//         </div>
//     );
// }

import React, { useState, useContext } from 'react'
import { AlbumContext } from '../AlbumContext'


export default function AlbumForm() {
    const [name, setName] = useState('')
    const [release, setRelease] = useState('')
    const [cover, setCover] = useState('')
    const [albums, setAlbums] = useContext(AlbumContext)

    function handleName (e) {
        setName(e.target.value)
    }

    function handleRelease (e) {
        setRelease(e.target.value)
    }

    function handleCover (e) {
        setCover(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlbums(albums => [...albums, {name: name, release: release, cover: cover, id: Math.random() * 1000}])
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Album Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Album Name"
                        value={albums.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="release"
                        placeholder="Release date"
                        value={albums.release}
                        onChange={handleRelease}
                    />
                </div>
                <div>
                    <input
                        type="img"
                        name="cover"
                        placeholder="Album cover URL"
                        value={albums.cover}
                        onChange={handleCover}
                    />
                </div>
                <div>
                    <button>Submit new Album</button>
                </div>
            </form>
        </div>
    )
}


